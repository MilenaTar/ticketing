import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReplyForm from '../components/molecules/ReplyForm';
import { Ticket } from '../types/Ticket.type';
import { getTicketById } from '../services/api';
import Loader from '../components/atoms/Loader';
import { Divider } from 'antd';
import TicketItem from '../components/molecules/TicketItem';
import { RepliesList } from '../components/organisms/RepliesList';

const SingleTicketPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [isLoading, setIslLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getTicketData(id);
    }
  }, [id]);

  if (isLoading && !ticket) {
    return <Loader />;
  }

  if (!ticket || !id) {
    navigate('/');
    return <></>;
  }

  return (
    <>
      <TicketItem ticket={ticket} isDetailedPage={true} />
      {ticket.replies && <RepliesList replies={ticket.replies} />}
      <Divider>Add reply</Divider>
      <ReplyForm
        ticketId={ticket.id}
        onReply={() => {
          getTicketData(id);
        }}
      />
    </>
  );

  function getTicketData(id: string) {
    setIslLoading(true);
    getTicketById(id)
      .then((data) => {
        setTicket(data);
        setIslLoading(false);
      })
      .catch((e) => {
        setIslLoading(false);
      });
  }
};

export default SingleTicketPage;
