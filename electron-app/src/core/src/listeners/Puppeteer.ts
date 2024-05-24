import { ipcMain, IpcMainInvokeEvent } from 'electron';
import Controller from 'core/decorators/controller';
import Listener from 'core/decorators/listener';
import puppeteer, { Browser } from 'puppeteer';
import PuppeteerService from 'core/utils/PuppeteerService';

@Controller('Puppeteer')
export default class PuppeteerListener {
  test = 'string';

  @Listener('init')
  async init(event: IpcMainInvokeEvent, pageUrl: string) {
    console.log('this', this.test);
    const puppeteerService = PuppeteerService.getInstance();
    return await puppeteerService.createPage(pageUrl);
  }

  @Listener('close')
  async close() {
    const puppeteerService = PuppeteerService.getInstance();
    await puppeteerService.close();
  }
}