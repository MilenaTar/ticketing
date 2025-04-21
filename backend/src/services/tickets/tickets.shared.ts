import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type {
  Tickets,
  TicketsData,
  TicketsPatch,
  TicketsQuery,
  TicketsService,
} from './tickets.class';

export type { Tickets, TicketsData, TicketsPatch, TicketsQuery };

export type TicketsClientService = Pick<
  TicketsService<Params<TicketsQuery>>,
  (typeof ticketsMethods)[number]
>;

export const ticketsPath = '/tickets';

export const ticketsMethods: Array<keyof TicketsService> = [
  'find',
  'get',
  'create',
  'patch',
  'remove',
];

export const ticketsClient = (client: ClientApplication) => {
  const connection = client.get('connection');

  client.use(ticketsPath, connection.service(ticketsPath), {
    methods: ticketsMethods,
  });
};

declare module '../../client' {
  interface ServiceTypes {
    [ticketsPath]: TicketsClientService;
  }
}
