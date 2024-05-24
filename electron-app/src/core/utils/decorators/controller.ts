import { ipcMain } from 'electron';

export default function Controller(domain: string) {
  return function(target: new (...arg: any[]) => any): {
    new(...args: any[]): any,
    __listener_controller: boolean,
    __execution_methods: Record<string, string>
  } {
    const prototype = target.prototype;
    const obj = Object.create(prototype);

    console.log('obj', Object.getOwnPropertyNames(obj));
    console.log('prototype', Object.getOwnPropertyNames(prototype));

    const listenerMethods = Object
      .getOwnPropertyNames(prototype)
      .filter(prop => prototype?.[prop]?.__is_listener === true);

    const executionMethods: Record<string, string> = {};

    listenerMethods.forEach((methodName) => {
      const method = prototype[methodName];
      const listerName = method?.__listener_name;

      if (!listerName) {
        return;
      }

      const eventName = `${domain}:${listerName}`;
      console.log('Controller obj', obj);
      console.log('Controller target', target);
      //@ts-ignore
      console.log('Controller target', target.prototype);

      ipcMain.handle(eventName, (...args: any) => method.apply(target, args));
      executionMethods[methodName] = eventName;
    });

    return Object.assign(
      target,
      {
        __listener_controller: true,
        __execution_methods: executionMethods
      }
    );
  };
}