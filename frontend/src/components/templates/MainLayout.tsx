import React from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, FileTextOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { Outlet, Link, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const location = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible theme="dark">
        <div style={{ height: 64, margin: '1rem', color: 'white', fontSize: '1.2rem' }}>
          🎫 TicketManager
        </div>
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
          <Menu.Item key="/" icon={<DashboardOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/tickets" icon={<FileTextOutlined />}>
            <Link to="/tickets">Tickets</Link>
          </Menu.Item>
          <Menu.Item key="/tickets/new" icon={<PlusOutlined />}>
            <Link to="/tickets/new">Create Ticket</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            backgroundColor: '#fff',
            padding: '0 1.5rem',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <UserOutlined style={{ fontSize: '1.2rem' }} />
        </Header>
        <Content
          style={{ margin: '1rem', padding: '2rem', background: '#fff', borderRadius: '8px' }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
