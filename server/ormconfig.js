const ormconfig = {
  type: 'mariadb',
  database: 'nest_todo',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};

module.exports = ormconfig;
