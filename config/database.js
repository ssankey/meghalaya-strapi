module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '89.116.121.165'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'MeghalayaIntoTheMountains'),
      user: env('DATABASE_USERNAME', 'sanket'),
      password: env('DATABASE_PASSWORD', 'S@nket@123'),
      ssl: env.bool('DATABASE_SSL', true) && {
        rejectUnauthorized: false, // Disable SSL certificate validation
      },
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});
