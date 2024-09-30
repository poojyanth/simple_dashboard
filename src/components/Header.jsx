import React from 'react';
import { Bell, MessageSquare, Search } from 'lucide-react';

const Header = () => (
  <header className="bg-white shadow-sm p-4 flex justify-between items-center">
    <div className="relative">
      <input type="text" placeholder="Search" className="pl-8 pr-4 py-2 rounded-lg border" />
      <Search className="absolute left-2 top-2.5 text-gray-400" size={20} />
    </div>
    <div className="flex items-center space-x-4">
      <Bell size={20} />
      <MessageSquare size={20} />
      <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full" />
    </div>
  </header>
);

export default Header;