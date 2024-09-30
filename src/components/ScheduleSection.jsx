import React from 'react';
import ScheduleItem from './ScheduleItem';

const ScheduleSection = ({ schedules }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-4">Upcoming Schedule</h3>
    {schedules.map((schedule, index) => (
      <ScheduleItem key={index} title={schedule.title} time={schedule.time} />
    ))}
    <button className="text-blue-600 mt-4">See All Schedules</button>
  </div>
);

export default ScheduleSection;
