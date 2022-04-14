/* module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
/*       host: env('DATABASE_HOST', 'ec2-52-18-116-67.eu-west-1.compute.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd66a8lqs6dld52'),
      user: env('DATABASE_USERNAME', 'txohvfmvlfeuzm'),
      password: env('DATABASE_PASSWORD', '5ee2bb49c75bb92df426facc7f8e2ab98b2919ae9c60d8629b01d4383af3c713'), */
      /* ssl: env.bool('DATABASE_SSL', true), */
/*       ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
      
    },
  },
}); 
 */

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
    },
});




