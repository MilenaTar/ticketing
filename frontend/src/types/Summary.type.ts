import { Ticket } from './Ticket.type';

export interface TicketsStats {
  total: number;
  open: number;
  closed: number;
}

export interface TicketsSummary {
  stats: TicketsStats;
  recent: Ticket[];
}
