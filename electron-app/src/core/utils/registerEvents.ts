import { contextBridge, ipcRenderer } from 'electron';

ipcRenderer.invoke('__build_event_methods').then(
  (methods: Record<string, Record<string, string>>) => {
    const events = Object.entries(methods).reduce<Record<string, Record<string, Function>>>(
      (acc, [controller, methods]) => ({
        ...acc,
        [controller]: Object.entries(methods).reduce<Record<string, Function>>(
          (acc, [methodName, eventName]) => ({
            ...acc,
            [methodName]: (...data: any[]) => ipcRenderer.invoke(eventName, ...data)
          }),
          {}
        )
      }), {}
    );

    contextBridge.exposeInMainWorld('mainProcessEventsApi', events);
  }
);
