module.exports = ({ env }) => 
({ defaultConnection: 'default', 
connections: { default: 
    { connector: 'bookshelf', 
    settings: { 
        client: 'mysql', 
        host: env('DATABASE_HOST', 'i54jns50s3z6gbjt.chr7pe7iynqr.eu-west-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'h8uiqcotskch7rrz'),
        user: env('DATABASE_USERNAME', 'wfl3hcyj61om4i18'),
        password: env('DATABASE_PASSWORD', 'joe5rt8zobrxct5a'),
        ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
          },
          
    }, 
}, 
},
});