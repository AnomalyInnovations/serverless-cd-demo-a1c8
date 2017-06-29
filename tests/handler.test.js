import * as handler from '../handler';

test('handler', async () => {
  const event = {};
  const context = {};
  const expected = {
    statusCode: 200,
    body: JSON.stringify({
      version: 'v1.5',
    }),
  };

  function callback(error, result) {
    expect(result).toEqual(expected);
  }

  expect.assertions(1);
  await handler.main(event, context, callback);
});

test('hi handler', async () => {
  // How do we setup the test environment here? Let's cheat
  process.env.AUDIENCE = process.env.AUDIENCE || 'me';
  const event = {};
  const context = {};
  const expected = {
    statusCode: 200,
    body: JSON.stringify({
      version: 'v1.5',
      message: `Hello, ${process.env.AUDIENCE}!`
    }),
  };

  function callback(error, result) {
    expect(result).toEqual(expected);
  }

  expect.assertions(1);
  await handler.hello(event, context, callback);
});
