import { CONFIG } from "@qawolf/config";
import { BrowserContext, launch, Page } from "../../src";

let context: BrowserContext;
let page: Page;

beforeAll(async () => {
  context = await launch();
  page = await context.page();
});

afterAll(() => context.close());

describe("BrowserContext.type", () => {
  it("sets text in input[type=text]", async () => {
    await context.goto(`${CONFIG.sandboxUrl}text-inputs`);

    const element = await context.type(
      { css: '[data-qa="html-text-input"]' },
      "spirit"
    );

    expect(await element.evaluate((e: HTMLInputElement) => e.value)).toBe(
      "spirit"
    );
  });
});

describe("Page.type", () => {
  it("appends text to input[type=text]", async () => {
    await context.goto(`${CONFIG.sandboxUrl}text-inputs`);

    const element = await page
      .qawolf()
      .type({ css: '[data-qa="html-text-input-filled"]' }, " more");

    expect(await element.evaluate((e: HTMLInputElement) => e.value)).toBe(
      "initial text more"
    );
  });

  it("replaces text in input[type=text]", async () => {
    await context.goto(`${CONFIG.sandboxUrl}text-inputs`);

    const element = await page
      .qawolf()
      .type({ css: '[data-qa="html-text-input-filled"]' }, "spirit", {
        replace: true
      });

    expect(await element.evaluate((e: HTMLInputElement) => e.value)).toBe(
      "spirit"
    );
  });

  it("clears input[type=text] for null", async () => {
    await context.goto(`${CONFIG.sandboxUrl}text-inputs`);

    const element = await page
      .qawolf()
      .type({ css: '[data-qa="html-text-input-filled"]' }, null, {
        replace: true
      });

    expect(await element.evaluate((e: HTMLInputElement) => e.value)).toBe("");
  });

  it("replaces a content editables text", async () => {
    await context.goto(`${CONFIG.sandboxUrl}content-editables`);

    const element = await page
      .qawolf()
      .type({ css: '[data-qa="content-editable"]' }, "spirit", {
        replace: true
      });

    expect(await element.evaluate((e: HTMLElement) => e.innerHTML)).toBe(
      "spirit"
    );
  });

  // TODO waiting on https://github.com/microsoft/playwright/issues/1057
  it.skip("replaces a input[type=date] value", async () => {
    await context.goto(`${CONFIG.sandboxUrl}date-pickers`);

    const element = await page.qawolf().type(
      { css: '[data-qa="material-date-picker-native"] input' },
      // "↓Digit0↑Digit0↓Digit9↑Digit9↓Digit0↑Digit0↓Digit9↑Digit9↓Digit2↑Digit2↓Digit0↑Digit0↓Digit2↑Digit2↓Digit0↑Digit0"
      "09092020"
    );

    expect(await element.evaluate((e: HTMLInputElement) => e.value)).toBe(
      "2020-09-09"
    );
  });
});
