import React from 'react';
import Header from '../components/Header';
import ApplyForLoan from '../components/ApplyForLoan';
import './styles.css';

const ApplyForLoanPage: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <ApplyForLoan />
    </div>
  );
};

export default ApplyForLoanPage;
