import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import './AdminDashBoardstyles.css';

const AdminDashBoard: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Dashboard />
      </div>
    </div>
  );
};

export default AdminDashBoard;

