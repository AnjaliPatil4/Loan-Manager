import React from 'react';

interface CardProps {
  title: string;
  value: string;
  icon: React.ReactNode; // Add an icon prop to accept the SVG
}

const Card: React.FC<CardProps> = ({ title, value, icon }) => (
  <div className="card">
    <div className="icon-container">
      {icon}
    </div>
    <div className='card-content'>
    <h2>{value}</h2>
    <p>{title}</p>
    </div>
  </div>
);

export default Card;
