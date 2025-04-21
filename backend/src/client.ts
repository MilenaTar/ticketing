// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers';
import type { TransportConnection, Application } from '@feathersjs/feathers';
import authenticationClient from '@feathersjs/authentication-client';
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client';
import { repliesClient } from './services/replies/replies.shared';
export type {
  Replies,
  RepliesData,
  RepliesQuery,
  RepliesPatch,
} from './services/replies/replies.shared';

import { ticketsClient } from './services/tickets/tickets.shared';
export type {
  Tickets,
  TicketsData,
  TicketsQuery,
  TicketsPatch,
} from './services/tickets/tickets.shared';

export interface Configuration {
  connection: TransportConnection<ServiceTypes>;
}

export interface ServiceTypes {}

export type ClientApplication = Application<ServiceTypes, Configuration>;

/**
 * Returns a typed client for the backend app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = <Configuration = any>(
  connection: TransportConnection<ServiceTypes>,
  authenticationOptions: Partial<AuthenticationClientOptions> = {},
) => {
  const client: ClientApplication = feathers();

  client.configure(connection);
  client.configure(authenticationClient(authenticationOptions));
  client.set('connection', connection);

  client.configure(ticketsClient);
  client.configure(repliesClient);
  return client;
};
