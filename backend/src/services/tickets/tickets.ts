import { hooks as schemaHooks } from '@feathersjs/schema';
import {
  ticketsDataValidator,
  ticketsPatchValidator,
  ticketsQueryValidator,
  ticketsResolver,
  ticketsExternalResolver,
  ticketsDataResolver,
  ticketsPatchResolver,
  ticketsQueryResolver,
} from './tickets.schema';
import type { Application } from '../../declarations';
import { TicketsService, getOptions } from './tickets.class';
import { ticketsPath, ticketsMethods } from './tickets.shared';
export * from './tickets.class';
export * from './tickets.schema';

export const tickets = (app: Application) => {
  app.use(ticketsPath, new TicketsService(getOptions(app)), {
    methods: ticketsMethods,
    events: [],
  });

  app.service(ticketsPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(ticketsExternalResolver),
        schemaHooks.resolveResult(ticketsResolver),
      ],
    },
    before: {
      all: [
        schemaHooks.validateQuery(ticketsQueryValidator),
        schemaHooks.resolveQuery(ticketsQueryResolver),
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(ticketsDataValidator),
        schemaHooks.resolveData(ticketsDataResolver),
      ],
      patch: [
        schemaHooks.validateData(ticketsPatchValidator),
        schemaHooks.resolveData(ticketsPatchResolver),
      ],
      remove: [],
    },
    after: {
      all: [],
    },
    error: {
      all: [],
    },
  });
};

declare module '../../declarations' {
  interface ServiceTypes {
    [ticketsPath]: TicketsService;
  }
}
