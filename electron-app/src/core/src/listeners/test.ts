import { IpcMainInvokeEvent } from 'electron';
import Controller from 'core/decorators/controller';
import Listener from 'core/decorators/listener';

@Controller('test')
export default class Test {
  @Listener("method")
  async testMethod(event: IpcMainInvokeEvent, data: string) {
    return "testMethod" + data
  }
}