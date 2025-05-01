import React from 'react';
import { Card, Col } from 'antd';
import { Ticket } from '../../types/Ticket.type';
import { useNavigate } from 'react-router-dom';
import { FormattedCreationDate } from './FormattedCreationDate';
import { TicketStatusTag } from './StatusTag';
import ButtonAtom from '../atoms/ButtonAtom';

interface Props {
  ticket: Ticket;
  isDetailedPage?: boolean;
}

const TicketItem: React.FC<Props> = ({ ticket, isDetailedPage = false }) => {
  const navigate = useNavigate();
  const handleView = (id: string) => {
    navigate(`/tickets/${id}`);
  };

  return (
    <Col span={24} key={ticket.id}>
      <Card
        onClick={() => {
          handleView(ticket.id);
        }}
        hoverable={!isDetailedPage}
        title={ticket.title}
        extra={
          !isDetailedPage && (
            <ButtonAtom label='View details' onClick={() => handleView(ticket.id)} type="default" />
          )
        }
        style={{ width: '100%', marginBottom: 16 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
            <p style={{ fontSize: 12, color: 'gray' }}>ID: {ticket.id} |</p>
            <FormattedCreationDate date={ticket.createdAt} />
          </div>
          <TicketStatusTag status={ticket.status} />
        </div>
        <p>{ticket.description}</p>
      </Card>
    </Col>
  );
};

export default TicketItem;
