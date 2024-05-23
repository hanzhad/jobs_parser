import { ipcMain } from 'electron';

export default function registerListeners(...listeners: Array<new (...args: any[]) => any>) {
  const executionMethods: Record<string, Record<string, string>> = {};

  listeners.forEach((listener) => {
    // @ts-ignore
    if (!listener.__listener_controller) {
      throw new Error(`${listener.name} isn't Listener`);
    }

    new listener();

    // @ts-ignore
    executionMethods[listener.name] = listener.__execution_methods;
  });

  ipcMain.handle('__build_event_methods', () => executionMethods);
}