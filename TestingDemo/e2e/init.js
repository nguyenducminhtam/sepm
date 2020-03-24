const detox = require('detox');
const config = require('../package.json').detox;
const adapter = require('detox/runners/jest/adapter');
const specReporter = require('detox/runners/jest/specReporter');

// Set the default timeout
jest.setTimeout(120000);

// jasmine.getEnv().addReporter(adapter);

// This takes care of generating status logs on a per-spec basis. By default, jest only reports at file-level.
// This is strictly optional.
// jasmine.getEnv().addReporter(specReporter);
// jasmine.getEnv().addReporter(assignReporter);
detoxCircus.getEnv().addEventsListener(adapter);
detoxCircus.getEnv().addEventsListener(specReporter);
// detoxCircus.getEnv().addEventsListener(assignReporter);

beforeAll(async () => {
  await detox.init(config);
}, 300000);

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
