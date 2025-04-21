import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import CreateTicketPage from '../pages/CreateTicketPage';
import TicketsListPage from '../pages/TicketsListPage';
import SingleTicketPage from '../pages/SingleTicketPage';
import DashboardPage from '../pages/Dashboard';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="tickets" element={<TicketsListPage />} />
        <Route path="tickets/new" element={<CreateTicketPage />} />
        <Route path="tickets/:id" element={<SingleTicketPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
