const config = {
  host: process.env.HOST,
  port: 3030,
  public: './public/',
  origins: [process.env.ORIGIN],
  paginate: {
    default: 10,
    max: 50,
  },
  postgresql: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  },
};

export default config;
