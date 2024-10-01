import React from 'react';
import ScheduleItem from './ScheduleItem';

const ScheduleSection = ({ schedules }) => (
  <div className="schedule-section">
    <div className="header">
      <h3>Upcoming Schedule</h3>
      <button className="date-selector">Today, 13 Sep 2021</button>
    </div>
    <div className="priority">Priority</div>
    {schedules.map((schedule, index) => (
      <ScheduleItem key={index} title={schedule.title} time={schedule.time} />
    ))}
    <button className="new-schedule-btn">Create a New Schedule</button>
  </div>
);

export default ScheduleSection;
