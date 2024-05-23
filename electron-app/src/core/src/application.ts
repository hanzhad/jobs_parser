import { PuppeteerListener, Test } from 'core/listeners';
import registerListeners from 'core/utils/registerListeners';

registerListeners(
  Test,
  PuppeteerListener,
)
