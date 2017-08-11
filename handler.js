export const main = async (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      version: 'v7',
      yaml_env: process.env.MESSAGE,
      secret_env: {
        db_host: process.env.DB_HOST,
        db_port: process.env.DB_PORT,
        db_user: process.env.DB_USER,
        db_pass: process.env.DB_PASS,
      }
    })
  });
};

