import knex from 'knex';
import type { Knex } from 'knex';
import type { Application } from './declarations';

declare module './declarations' {
  interface Configuration {
    postgresqlClient: Knex;
  }
}

export const postgresql = (app: Application) => {
  const config = app.get('postgresql');
  const db = knex(config!);

  app.set('postgresqlClient', db);
};
