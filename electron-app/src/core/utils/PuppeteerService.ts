import puppeteer, { Browser, Page } from 'puppeteer';

export default class PuppeteerService {
  private static instance: PuppeteerService;
  private browser: Browser;
  public page: Page;

  private constructor() {
  }

  public static getInstance(): PuppeteerService {
    if (!PuppeteerService.instance) {
      PuppeteerService.instance = new PuppeteerService();
    }

    return PuppeteerService.instance;
  }

  async init(url: string, devtools?: boolean) {
    if (this.browser) {
      // todo
      throw new Error('browser');
    }

    if (this.page) {
      // todo
      throw new Error('page');
    }

    this.browser = await puppeteer.launch({
      headless: false,
      devtools,
      args: ['--remote-debugging-port=9222'] // Specify the debugging port
    });

    this.page = await this.browser.newPage();

    await this.page.goto(url);
  }

  async close() {
    await this.browser.close();
    this.browser = undefined;
    this.page = undefined;
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