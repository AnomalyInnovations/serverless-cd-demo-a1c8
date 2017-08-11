import * as handler from '../handler';

test('handler', async () => {
  const event = {};
  const context = {};
  const expected = 'v9';

  function callback(error, result) {
    const resultBody = JSON.parse(result.body);
    expect(resultBody.version).toEqual(expected);
  }

  expect.assertions(1);
  await handler.main(event, context, callback);
});

