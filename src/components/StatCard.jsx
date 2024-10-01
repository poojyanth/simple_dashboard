import React from 'react';

const StatCard = ({ title, value, subtext, color }) => (
  <div className={`stat-card stat-card-color-${color}`}>
    <h3 className="stat-title">{title}</h3>
    <p className="stat-value">{value}</p>
    <p className={`stat-subtext stat-subtext-color-${color}`}>{subtext}</p>
  </div>
);

export default StatCard;
