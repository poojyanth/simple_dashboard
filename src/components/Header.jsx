import React from 'react';
import { Bell, MessageSquare, Search } from 'lucide-react';
import ProfilePic from '../assets/profile_pic.png';

const Header = () => (
  <header className="header">
    <div className="search-container">
      <input type="text" placeholder="Search" className="search-input" />
      <Search className="search-icon" size={20} />
    </div>
    <div className="header-icons">
      <Bell size={20} />
      <MessageSquare size={20} />
      <img src={ProfilePic} alt="User" className="user-avatar" />
      <p className="user-name">John Doe</p>
      {/* down arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-chevron-down"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  </header>
);

export default Header;
