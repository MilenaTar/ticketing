import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Tickets, TicketsData, TicketsPatch, TicketsQuery } from './tickets.schema';

export type { Tickets, TicketsData, TicketsPatch, TicketsQuery };

export interface TicketsParams extends KnexAdapterParams<TicketsQuery> {}

export class TicketsService<ServiceParams extends Params = TicketsParams> extends KnexService<
  Tickets,
  TicketsData,
  TicketsParams,
  TicketsPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'tickets',
  };
};
