import { Reply } from './Reply.type';

export enum TicketStatus {
  OPEN = 'Open',
  CLOSED = 'Closed',
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
  replies?: Reply[];
}
