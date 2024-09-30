import React from 'react';
import vasitum_logo_full from '../assets/Vasitum_logo_full.png';

const Sidebar = () => (
  <aside className="w-48 bg-bg_2 shadow-md">
    <div className="p-4">
      <div className='flex justify-center'>
        <img src={vasitum_logo_full} alt="Vasitum Logo" className="w-28" />
      </div>
    </div>
    <nav className="mt-8">
        <p className='text-[#686868]'>Main Menu</p>
      <a href="#" className="block py-2 px-4 bg-blue-100 text-blue-600">Dashboard</a>
      <a href="#" className="block py-2 px-4">Recruitment</a>
      <a href="#" className="block py-2 px-4">Schedule</a>
      <a href="#" className="block py-2 px-4">Employee</a>
      <a href="#" className="block py-2 px-4">Department</a>
    </nav>
  </aside>
);

export default Sidebar;