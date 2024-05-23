export default function Listener(name: string) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if (typeof descriptor.value !== 'function') {
      throw new Error(`@Listener can only be applied to methods, not: ${propertyKey.toString()}`);
    }

    descriptor.value.__is_listener = true;
    descriptor.value.__listener_name = name;
  };
}