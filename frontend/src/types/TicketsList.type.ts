import { Ticket } from './Ticket.type';

export interface TicketListResponse {
  total: number;
  limit?: number;
  skip?: number;
  data: Ticket[];
}
