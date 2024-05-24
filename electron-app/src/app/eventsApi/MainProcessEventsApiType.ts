type ResponseType<DATA = undefined, ERROR = { name: string, message: string }> = Promise<{
  data?: DATA;
  error?: ERROR;
}>;

export type MainProcessEventsApiType = {
  PuppeteerListener: {
    init: (url: string) => ResponseType<{ id: string, title: string, url: string; }>
    close: () => ResponseType;
  };
}