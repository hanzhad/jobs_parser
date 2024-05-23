import { MainProcessEventsApiType} from './MainProcessEventsApiType';

type WindowType = Window & typeof globalThis & { mainProcessEventsApi: MainProcessEventsApiType };

const { mainProcessEventsApi  } = window as WindowType

export {
  MainProcessEventsApiType,
};
export default mainProcessEventsApi;