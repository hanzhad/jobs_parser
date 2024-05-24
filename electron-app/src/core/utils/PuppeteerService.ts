import puppeteer, { Browser, Page } from 'puppeteer';
import { v4 as uuid } from 'uuid';

export default class PuppeteerService {
  private static instance: PuppeteerService;
  private browser: Browser;
  private pages = new Map<string, Page>();

  private browserDefaultConfig = {
    headless: false,
    args: ['--remote-debugging-port=9222'] // Specify the debugging port
  };

  private constructor() {
  }

  public static getInstance(): PuppeteerService {
    if (!PuppeteerService.instance) {
      PuppeteerService.instance = new PuppeteerService();
    }

    return PuppeteerService.instance;
  }

  private async getBrowserInstance(devtools?: boolean) {
    if (!this.browser) {
      this.browser = await puppeteer.launch({
        ...this.browserDefaultConfig,
        devtools
      });
    }

    return this.browser;
  }

  async createPage(url: string, devtools?: boolean) {
    await this.getBrowserInstance(devtools);

    const page = await this.browser.newPage();

    await page.goto(url);

    const pageId = uuid();
    const title = await page.title();

    return {
      id: pageId,
      title,
      url,
    }
  }

  async close() {
    await this.browser.close();
    this.browser = undefined;
  }
}

// try {
//
//
//
//   // Navigate the page to a URL
//   await page.goto(pageUrl);
//
//   // Set screen size
//   await page.setViewport({ width: 1080, height: 1024 });
//   await page.waitForSelector('.button.button--electron.button--dark.button--lg');
//   const button = await page.$('.button.button--electron.button--dark.button--lg');
//   console.log('button', button);
//
//   await button.click();
//
//   setTimeout(() => {
//     browser.close();
//   }, 1000 * 60 * 5);
//
//   return 'true';
// } catch (e) {
//   return e;
// }