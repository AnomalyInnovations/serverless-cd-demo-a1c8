import * as handler from '../handler';

test('handler', async () => {
  const event = {};
  const context = {};
  const expected = {
    statusCode: 200,
    body: JSON.stringify({
      version: 'v1.4',
    }),
  };

  function callback(error, result) {
    expect(result).toEqual(expected);
  }

  expect.assertions(1);
  await handler.main(event, context, callback);
});
