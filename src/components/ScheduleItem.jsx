import React from 'react';

const ScheduleItem = ({ title, time }) => (
  <div className="flex justify-between items-center py-2">
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
    <button className="text-gray-400">•••</button>
  </div>
);

export default ScheduleItem;