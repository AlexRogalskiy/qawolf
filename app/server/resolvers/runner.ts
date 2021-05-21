import fetch from 'node-fetch';

import { findRun } from "../models/run";
import { Context, Runner } from "../types";
import { ensureTeams, ensureTestAccess, ensureUser } from "./utils";

type RunnerQuery = {
  request_test_runner?: boolean;
  run_id?: string;
  test_branch?: string;
  test_id?: string;
};

export const runnerResolver = async (
  _: Record<string, unknown>,
  { run_id, test_id }: RunnerQuery,
  { db, logger, user: contextUser, teams }: Context
): Promise<Runner | null> => {
  const log = logger.prefix("runnerResolver");

  const user = ensureUser({ logger, user: contextUser });
  ensureTeams({ logger, teams });
  log.debug(user.id);

  const run = run_id ? await findRun(run_id, { db, logger }) : null;
  const testId = run?.test_id || test_id;
  if (!testId) throw new Error(`test not found ${testId}`);

  await ensureTestAccess({ teams, test_id: testId }, { db, logger });

  // TODO get runner from pool by session key (run_id or test_id_branch)
  // we need to track this centrally to send to the same region

  if (process.env.RUNNER_SCHEDULER_URL) {
    try {
      const res = await fetch(
        `${process.env.RUNNER_SCHEDULER_URL}/session/${testId}`
      );
      const runner: Runner | null = await res.json();
      log.debug(runner);
      return runner;
    } catch (err) {
      log.error(err);
      return null;
    }
  }
  
  return {
    vnc_url: process.env.RUNNER_VNC_URL || "ws://localhost:5000",
    ws_url: process.env.RUNNER_WS_URL || "ws://localhost:4000/socket.io",
  };
};
