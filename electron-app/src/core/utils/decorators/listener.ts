export default function Listener(name: string) {
  return (target: any, nameMethod: string, descriptor: PropertyDescriptor) => {
    if (typeof descriptor.value !== 'function') {
      throw new Error(`@Listener can only be applied to methods, not: ${nameMethod.toString()}`);
    }

    const originalMethod = descriptor.value;
    descriptor.value = async (...args: any[]) => {
      try {
        console.log('Listener target', target);
        const executionMethod = await originalMethod.apply(target, args);
        return executionMethod;
      } catch (error) {
        return { error: { name: error.name, message: error.message } };
      }
    };


    descriptor.value.__is_listener = true;
    descriptor.value.__listener_name = name;
  };
}
