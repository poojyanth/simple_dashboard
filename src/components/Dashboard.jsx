import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useParams } from "react-router-dom";
import StatCard from './StatCard';
import ChartCard from './ChartCard';
import AnnouncementSection from './AnnouncementSection';
import ScheduleSection from './ScheduleSection';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const index = useParams(":index").index;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const json = await response.json();
      setData(json[index]);
    };
    
    fetchData();
  }, [index]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex h-screen bg-white w-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl text-black font-bold mb-6">Dashboard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {data.statCards.map((card, index) => (
              <StatCard 
                key={index}
                title={card.title} 
                value={card.value} 
                subtext={card.subtext} 
                color={index + 1} 
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {data.chartCards.map((chart, index) => (
              <ChartCard 
                key={index}
                title={chart.title} 
                value={chart.value} 
                subtext={chart.subtext} 
                change={chart.change} 
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnnouncementSection announcements={data.announcements} />
            <ScheduleSection schedules={data.schedules} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
