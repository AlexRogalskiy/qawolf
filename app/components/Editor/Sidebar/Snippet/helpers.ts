import { edgeSize } from "../../../../theme/theme";

const ClickActions = [
  "Assert element",
  "Assert element text",
  "Assert page text",
  "Click",
  "Get element value",
  "Hover",
  "Upload image",
] as const;

const FillActions = [
  "Assert element",
  "Assert element text",
  "Assert page text",
  "Fill",
  "Fill test email",
  "Get element value",
  "Hover",
] as const;

export type ActionType =
  | typeof ClickActions[number]
  | typeof FillActions[number];

export const buildActionOptions = (
  hasText: boolean,
  isFillable: boolean
): ActionType[] => {
  const options: ActionType[] = isFillable
    ? [...FillActions]
    : [...ClickActions];

  if (!hasText) {
    options.splice(options.indexOf("Assert element text"), 1);
    options.splice(options.indexOf("Assert page text"), 1);
  }

  return options;
};

export const buildCode = (
  action: ActionType,
  selector: string,
  text: string,
  variable = "page"
): string => {
  if (action === "Assert element") {
    return `await assertElement(${variable}, ${formatArgument(selector)});`;
  }

  if (action === "Assert element text") {
    return `await assertText(${variable}, ${formatArgument(
      text
    )}, { selector: ${formatArgument(selector)} });`;
  }

  if (action === "Assert page text") {
    return `await assertText(${variable}, ${formatArgument(text)});`;
  }

  const selectorArgument = formatArgument(selector);

  if (action === "Click") return `await ${variable}.click(${selectorArgument});`;

  if (action === "Fill") {
    return `await ${variable}.fill(${selectorArgument}, ${formatArgument(text)});`;
  }

  if (action === "Fill test email") {
    return `const { email, waitForMessage } = getInbox();\nawait ${variable}.fill(${selectorArgument}, email);\n// send the email then wait for the message\n// const message = await waitForMessage();`;
  }

  if (action === "Get element value") {
    return `var value = await getValue(${variable}, ${formatArgument(selector)});`;
  }

  if (action === "Hover") return `await ${variable}.hover(${selectorArgument});`;

  if (action === "Upload image") {
    return `${variable}.once('filechooser', (chooser) => chooser.setFiles('/root/files/avatar.png'));\nawait ${variable}.click(${selectorArgument});`;
  }

  return "";
};

// keep in sync with runner
export const formatArgument = (value: string | null): string => {
  if (value === null) return '""';

  // serialize newlines etc
  let escaped = JSON.stringify(value);
  // remove wrapper quotes
  escaped = escaped.substring(1, escaped.length - 1);
  // allow unescaped quotes
  escaped = escaped.replace(/\\"/g, '"');

  if (!escaped.includes(`"`)) return `"${escaped}"`;
  if (!escaped.includes(`'`)) return `'${escaped}'`;

  return "`" + escaped.replace(/`/g, "\\`") + "`";
};

export const labelProps = {
  color: "gray0",
  margin: { bottom: edgeSize.xxsmall },
  size: "componentBold" as const,
};
