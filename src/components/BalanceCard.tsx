import React from 'react';

const BalanceCard: React.FC = () => {
  return (
    <div className="balance-card">
      <div className="balance-info">
        <h1>0.0</h1>
        <p>DEFICIT</p>
      </div>
      <button>Get A Loan</button>
    </div>
  );
};

export default BalanceCard;
