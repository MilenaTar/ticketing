import type { RealTimeConnection, Params } from '@feathersjs/feathers';
import type { AuthenticationResult } from '@feathersjs/authentication';
import '@feathersjs/transport-commons';
import type { Application, HookContext } from './declarations';
import { logger } from './logger';

export const channels = (app: Application) => {
  logger.warn(
    'Publishing all events to all authenticated users. See `channels.ts` and https://dove.feathersjs.com/api/channels.html for more information.',
  );

  app.on('connection', (connection: RealTimeConnection) => {
    // On a new real-time connection, add it to the anonymous channel
    app.channel('anonymous').join(connection);
  });

  app.on('login', (authResult: AuthenticationResult, { connection }: Params) => {
    // connection can be undefined if there is no
    // real-time connection, e.g. when logging in via REST
    if (connection) {
      app.channel('anonymous').leave(connection);

      app.channel('authenticated').join(connection);
    }
  });

  app.publish((data: any, context: HookContext) => {
    return app.channel('authenticated');
  });
};
