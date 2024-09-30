import React from 'react';
import AnnouncementItem from './AnnouncementItem';

const AnnouncementSection = ({ announcements }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-4">Announcements</h3>
    {announcements.map((announcement, index) => (
      <AnnouncementItem key={index} title={announcement.title} time={announcement.time} />
    ))}
    <button className="text-blue-600 mt-4">See All Announcements</button>
  </div>
);

export default AnnouncementSection;
