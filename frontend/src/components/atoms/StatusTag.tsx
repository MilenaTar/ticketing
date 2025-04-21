import { Tag } from 'antd';
import { TicketStatus } from '../../types/Ticket.type';

type TagProps = {
  status: TicketStatus;
};

export const TicketStatusTag = ({ status }: TagProps) => {
  return <Tag color={status === TicketStatus.OPEN ? 'green' : 'red'}>{status.toUpperCase()}</Tag>;
};
