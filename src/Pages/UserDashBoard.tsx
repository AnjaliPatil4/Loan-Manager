import React from 'react';
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import LoansTable from '../components/LoansTable';

const UserDashBoard: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <BalanceCard />
        <LoansTable />
      </div>
    </div>
  );
};

export default UserDashBoard;
