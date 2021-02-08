import sgMail, { MailDataRequired } from "@sendgrid/mail";

import environment from "../../environment";
import { Logger } from "../../Logger";
import { deleteInvite, findInvite } from "../../models/invite";
import { findUsersForTeam } from "../../models/user";
import { Suite, SuiteRun, Trigger, User } from "../../types";
import {
  buildInviteHtml,
  buildLoginCode,
  buildLoginCodeHtml,
  buildSuiteHtml,
} from "./html";

sgMail.setApiKey(environment.SENDGRID_API_KEY);

type SendEmailForInvite = {
  inviteId: string;
  logger: Logger;
};

type SendEmailForLoginCode = {
  logger: Logger;
  login_code: string;
  user: User;
};

type SendEmailForSuite = {
  logger: Logger;
  runs: SuiteRun[];
  suite_id: string;
  trigger: Trigger;
  user: User;
};

type SendEmailAlert = {
  logger: Logger;
  runs: SuiteRun[];
  suite: Suite;
  trigger: Trigger;
};

const buildFrom = (wolfName: string): MailDataRequired["from"] => {
  return {
    email: `${wolfName.toLowerCase()}@qawolf.com`,
    name: `${wolfName} the QA Wolf`,
  };
};

export const sendEmailForInvite = async ({
  inviteId,
  logger,
}: SendEmailForInvite): Promise<void> => {
  const log = logger.prefix("sendEmailForInvite");
  log.debug("invite", inviteId);

  const invite = await findInvite(inviteId, { logger });

  try {
    const message = {
      to: [{ email: invite.email }],
      from: buildFrom(invite.wolf_name),
      subject: `🐺 ${invite.creator_email} has invited you to join the team ${invite.team_name}`,
      html: buildInviteHtml(invite),
      reply_to: { email: "hello@qawolf.com" },
    };

    await sgMail.send(message);
    log.debug("email sent");
  } catch (error) {
    logger.alert("error: email invite", invite);
    // delete invite from database if cannot send email
    await deleteInvite(invite.id, { logger });
  }
};

export const sendEmailForLoginCode = async ({
  logger,
  login_code,
  user,
}: SendEmailForLoginCode): Promise<void> => {
  const log = logger.prefix("sendEmailForLoginCode");
  log.debug(user.email);

  if (!user.login_code_digest || !user.login_code_expires_at) {
    logger.error(`No login code for user ${user.id}`);
    throw new Error("No login code for user");
  }

  try {
    const message = {
      to: [{ email: user.email }],
      from: buildFrom(user.wolf_name),
      subject: `🐺 QA Wolf code: ${buildLoginCode(login_code)}`,
      html: buildLoginCodeHtml({ login_code, user }),
      reply_to: { email: "hello@qawolf.com" },
    };

    log.debug(`send email to ${user.email}`);
    await sgMail.send(message);
  } catch (error) {
    logger.alert("error: email code", user.email, error.message);
  }
};

export const sendEmailForSuite = async ({
  logger,
  runs,
  suite_id,
  trigger,
  user,
}: SendEmailForSuite): Promise<void> => {
  const log = logger.prefix("sendEmailForSuite");
  log.debug(user.email);

  const is_fail = runs.some((r) => r.status === "fail");

  const subject = is_fail
    ? `🐺 Oh no! Your ${trigger.name} tests failed.`
    : `🎉 All good! Your ${trigger.name} tests passed.`;

  try {
    const message = {
      to: [{ email: user.email }],
      from: buildFrom(user.wolf_name),
      subject,
      html: buildSuiteHtml({ runs, suite_id, trigger }),
      reply_to: { email: "hello@qawolf.com" },
    };

    log.debug("send email to %s", user.email);
    await sgMail.send(message);
  } catch (error) {
    logger.alert("error: email alert", user.email, error.message);
  }
};

export const sendEmailAlert = async ({
  logger,
  runs,
  suite,
  trigger,
}: SendEmailAlert): Promise<void> => {
  const log = logger.prefix("sendEmailAlert");
  log.debug("suite", suite.id);

  const users = await findUsersForTeam(suite.team_id, { logger });

  const sendPromises = users.map((user) =>
    sendEmailForSuite({ logger, runs, suite_id: suite.id, trigger, user })
  );

  await Promise.all(sendPromises);
};
