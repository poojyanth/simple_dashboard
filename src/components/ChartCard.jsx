import React from 'react';

const ChartCard = ({ title, value, subtext, change }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-3xl font-bold">{value}</p>
    <p className="text-sm">{subtext}</p>
    <div className="mt-2">
      <span className="text-green-500">{change}</span>
      {/* Placeholder for chart */}
      <div className="h-16 bg-gray-200 rounded mt-2"></div>
    </div>
  </div>
);

export default ChartCard;