import React from 'react';

const ScheduleItem = ({ title, time }) => (
  <div className="schedule-item">
    <div className="item-info">
      <p className="title">{title}</p>
      <p className="time">{time}</p>
    </div>
    <button className="options-btn">•••</button>
  </div>
);

export default ScheduleItem;
