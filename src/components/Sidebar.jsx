import React from 'react';
import vasitum_logo_full from '../assets/Vasitum_logo_full.png';
import Dashboard_icon from '../assets/ic_dashboard.png';
import Recruitment_icon from '../assets/ic_recruitment.png';
import Calendar_icon from '../assets/ic_calendar.png';
import Employee_icon from '../assets/ic_employee.png';
import Department_icon from '../assets/ic_department.png';
import Support_icon from '../assets/ic_support.png';
import Settings_icon from '../assets/ic_settings.png';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="logo-container">
      <img src={vasitum_logo_full} alt="Vasitum Logo" className="logo" />
    </div>
    <nav className="menu">
      <p className='menu-title'>Main Menu</p>
      <a href="#" className="menu-link active"><img src={Dashboard_icon} alt=""/>Dashboard</a>
      <a href="#" className="menu-link"><img src={Recruitment_icon} alt=""/>Recruitment</a>
      <a href="#" className="menu-link"><img src={Calendar_icon} alt=""/>Schedule</a>
      <a href="#" className="menu-link"><img src={Employee_icon} alt=""/>Employee</a>
      <a href="#" className="menu-link"><img src={Department_icon} alt=""/>Department</a>
    </nav>
    <nav className='menu'>
      <p className='menu-title'>Others</p>
      <a href="#" className="menu-link"><img src={Support_icon} alt=""/>Support</a>
      <a href="#" className="menu-link"><img src={Settings_icon} alt=""/>Settings</a>
    </nav>
  </aside>
);

export default Sidebar;
