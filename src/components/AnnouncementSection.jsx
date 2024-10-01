import React from 'react';
import AnnouncementItem from './AnnouncementItem';

const AnnouncementSection = ({ announcements }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className='announcements-header'>
      <h3 className="text-lg font-semibold mb-4">Announcements</h3>
      {/* date input with todays date as value default*/}
      <input type="date" value={new Date().toISOString().split('T')[0]} />
    </div>
    {announcements.map((announcement, index) => (
      <AnnouncementItem key={index} title={announcement.title} time={announcement.time} />
    ))}
    <button className="announcement-section-button">See All Announcements</button>
  </div>
);

export default AnnouncementSection;
