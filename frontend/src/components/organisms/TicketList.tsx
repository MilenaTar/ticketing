import React from 'react';
import { Ticket } from '../../types/Ticket.type';
import { Row } from 'antd';
import TicketItem from '../molecules/TicketItem';

interface TicketListProps {
  tickets: Ticket[];
}

export const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  return (
    <Row gutter={16}>
      {tickets.map((ticket) => (
        <TicketItem ticket={ticket} key={ticket.id} />
      ))}
    </Row>
  );
};
