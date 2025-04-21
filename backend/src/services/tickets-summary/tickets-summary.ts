import type { Application } from '../../declarations';
import { TicketsSummaryService } from './tickets-summary.class';
import { ticketsSummaryPath, ticketsSummaryMethods } from './tickets-summary.shared';

export const ticketsSummary = (app: Application) => {
  app.use(ticketsSummaryPath, new TicketsSummaryService(app), {
    methods: ticketsSummaryMethods,
  });
};
