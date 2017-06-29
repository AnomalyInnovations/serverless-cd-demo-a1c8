export const main = async (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      version: 'v1.5',
      message: process.env.MESSAGE
    })
  });
};

export const hello = async (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      version: 'v1.5',
      message: `Hello, ${process.env.AUDIENCE}!`
    })
  })
}
