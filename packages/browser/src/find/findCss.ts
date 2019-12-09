import { logger } from "@qawolf/logger";
import { FindOptions, Selector } from "@qawolf/types";
import { QAWolfWeb } from "@qawolf/web";
import { ElementHandle, Page, Serializable } from "puppeteer";

export const findCss = async (
  page: Page,
  selector: Selector,
  options: FindOptions
): Promise<ElementHandle<Element>> => {
  logger.verbose("findCss");

  const jsHandle = await page.evaluateHandle(
    (selector, options) => {
      const qawolf: QAWolfWeb = (window as any).qawolf;
      return qawolf.find.findCss(selector, options);
    },
    selector as Serializable,
    options as Serializable
  );

  const element = jsHandle.asElement();
  if (!element) throw new Error("Element not found");

  return element;
};
