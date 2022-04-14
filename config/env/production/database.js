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
                    rejectUnauthorized: false
                  },
        },
        debug: false,
      },
    });