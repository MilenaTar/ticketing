import React, { useEffect, useState } from 'react';
import { Row, Card, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { getSummaryData } from '../services/api';
import { Ticket } from '../types/Ticket.type';
import { TicketsStats, TicketsSummary } from '../types/Summary.type';
import { CardWithTitle } from '../components/molecules/CardWithTitle';
import Loader from '../components/molecules/Loader';
import { TicketStatusTag } from '../components/molecules/StatusTag';

const DashboardPage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [stats, setStats] = useState<TicketsStats>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await getSummaryData();
        const payload = res as TicketsSummary;
        setTickets(payload.recent);
        setStats(payload?.stats);
      } catch (err: any) {
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const columns: ColumnsType<Ticket> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      ellipsis: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <TicketStatusTag status={status} />,
      width: 120,
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (ts) => dayjs(ts).format('YYYY-MM-DD HH:mm'),
      width: 180,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => <Link to={`/tickets/${record.id}`}>View</Link>,
      width: 100,
    },
  ];

  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <CardWithTitle title={'Total Tickets'} value={stats?.total} />
        <CardWithTitle title={'Open Tickets'} value={stats?.open} />
        <CardWithTitle title={'Closed Tickets'} value={stats?.closed} />
      </Row>
      <Card title="Latest Tickets">
        <Table rowKey="id" dataSource={tickets} pagination={false} columns={columns} />
      </Card>
    </div>
  );
};

export default DashboardPage;
