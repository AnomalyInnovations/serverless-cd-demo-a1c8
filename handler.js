export const main = async (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      version: 'v9',
      yaml_env: process.env.MESSAGE,
      secret_env: process.env.DB_URL,
    })
  });
};

