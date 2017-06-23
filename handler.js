export const main = async (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      version: 'v1.1',
      message: process.env.MESSAGE
    })
  });
};
