import React from 'react';

const AnnouncementItem = ({ title, time }) => (
  <div className="announcement-card">
    <div className='announcement-data'>
      <h3 className="">{title}</h3>
      <p className="announcement-subtext">{time}</p>
    </div>
    <div className='announcement-options'>
      📌
      <button className="">•••</button>
    </div>
  </div>
);

export default AnnouncementItem;