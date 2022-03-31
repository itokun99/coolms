module.exports = ({ env }) => ({
  connection: {
    client: env('DB_ADAPTER', 'mysql'),
    connection: {
      host: env('DB_HOST', 'localhost'),
      port: env('DB_PORT', '8889'),
      user: env('DB_USER', 'root'),
      password: env('DB_PASS', 'root'),
      database: env('DB_NAME', 'coolms')
    }
  }
});
