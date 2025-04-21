import { replies } from './replies/replies';
import { tickets } from './tickets/tickets';
import type { Application } from '../declarations';
import { ticketsSummary } from './tickets-summary/tickets-summary';

export const services = (app: Application) => {
  app.configure(replies);
  app.configure(tickets);
  app.configure(ticketsSummary);
};
