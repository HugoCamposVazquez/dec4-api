    const parse = require('mysql-parse').parse;
    const config = parse(process.env.JAWSDB_URL);
    module.exports = ({ env }) => ({
        connection: {
            client: 'mysql',
        connection: {
                host: config.host,
                port: config.port,
                database: config.database,
                user: config.user,
                password: config.password,
            ssl: {
              rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
            },
        },
        debug: false,
      },
    });