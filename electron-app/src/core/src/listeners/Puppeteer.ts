import { ipcMain, IpcMainInvokeEvent } from 'electron';
import Controller from 'core/decorators/controller';
import Listener from 'core/decorators/listener';
import puppeteer, { Browser } from 'puppeteer';
import PuppeteerService from 'core/utils/PuppeteerService';

@Controller('Puppeteer')
export default class PuppeteerListener {
  @Listener('init')
  async init(event: IpcMainInvokeEvent, pageUrl: string) {
    try {
      const puppeteerService = PuppeteerService.getInstance();
      await puppeteerService.init(pageUrl);

      return {};
    } catch (e) {
      return { error: e.name };
    }
  }

  @Listener('close')
  async close() {
    try {
      const puppeteerService = PuppeteerService.getInstance();
      await puppeteerService.close();
    } catch (e) {
      return { error: e.name };
    }
  }
}