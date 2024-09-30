import { Key } from 'lucide-react';
import React from 'react';

const StatCard = ({  title, value, subtext, color }) => (
  <div className={`p-4 rounded-lg bg-statCard${color}`}>
    <h3 className="text-lg font-semibold text-[#161E54]">{title}</h3>
    <p className="text-3xl font-bold text-[#161E54]">{value}</p>
    <p className={`text-sm text-statCardFont${color}`}>{subtext}</p>
  </div>
);

export default StatCard;