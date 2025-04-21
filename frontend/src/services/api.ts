import { TicketStatus } from '../types/Ticket.type';
import { ApiRequestMethod, customAxios } from './custom-axios';

export const fetchTickets = (
  page: number = 1,
  pageSize: number = 10,
  status: TicketStatus | 'all' = 'all',
) => {
  const skip = (page - 1) * pageSize;
  const params: Record<string, any> = {
    $skip: skip,
    $limit: pageSize,
    '$sort[createdAt]': -1,
  };

  if (status !== 'all') {
    params.status = status;
  }

  return customAxios(`/tickets`, {
    method: ApiRequestMethod.GET,
    queryParams: { ...params },
  });
};

export const getTicketById = async (id: string) => {
  return customAxios(`/tickets/${id}`, {
    method: ApiRequestMethod.GET,
  });
};

export const getSummaryData = async () => {
  return customAxios(`/tickets-summary`, {
    method: ApiRequestMethod.GET,
  });
};
