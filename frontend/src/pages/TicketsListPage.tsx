import React, { useEffect, useState } from 'react';
import { fetchTickets } from '../services/api';
import { Ticket, TicketStatus } from '../types/Ticket.type';
import { TicketList } from '../components/organisms/TicketList';
import { Alert, Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import { TicketsToolsPanel } from '../components/organisms/TicketsToolsPanel';
import { TicketListResponse } from '../types/TicketsList.type';
import Loader from '../components/molecules/Loader';

const PAGE_SIZE = 10;
const TicketsListPage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalTickets, setTotalTickets] = useState(0);
  const navigate = useNavigate();
  const handleCreateNew = () => {
    navigate(`/tickets/new`);
  };
  const [statusFilter, setStatusFilter] = useState<TicketStatus | 'all'>('all');

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetchTickets(currentPage, PAGE_SIZE, statusFilter);
        const payload = res as TicketListResponse;
        setTickets(payload.data);
        setTotalTickets(payload.total);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch tickets');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [currentPage, statusFilter]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleStatusChange = (value: TicketStatus | 'all') => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  if (loading) return <Loader />;

  if (error) return <Alert message="Error" description={error} type="error" showIcon />;

  return (
    <>
      <TicketsToolsPanel
        onCreate={() => {
          handleCreateNew();
        }}
        onStatusChange={handleStatusChange}
        statusFilter={statusFilter}
      />
      <TicketList tickets={tickets} />
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Pagination
          current={currentPage}
          pageSize={PAGE_SIZE}
          total={totalTickets}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </>
  );
};

export default TicketsListPage;
