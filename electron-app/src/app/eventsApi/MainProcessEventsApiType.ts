export type MainProcessEventsApiType = {
  PuppeteerListener: {
    init: (url: string) => Promise<{ error?: string }>;
    close: () =>  Promise<{ error?: string }>;
  };
}