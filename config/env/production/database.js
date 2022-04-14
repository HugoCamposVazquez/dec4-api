    const parse = require('mysql-parse').parse;
    const config = parse(process.env.DATABASE_URL);
    module.exports = ({ env }) => ({
        connection: {
            client: 'mysql',
        connection: {
            host: env('DATABASE_HOST', 'i54jns50s3z6gbjt.chr7pe7iynqr.eu-west-1.rds.amazonaws.com'),
            port: env.int('DATABASE_PORT', 3306),
            database: env('DATABASE_NAME', 'h8uiqcotskch7rrz'),
            user: env('DATABASE_USERNAME', 'wfl3hcyj61om4i18'),
            password: env('DATABASE_PASSWORD', 'joe5rt8zobrxct5a'),
            ssl: {
              rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
            },
        },
        debug: false,
      },
    });