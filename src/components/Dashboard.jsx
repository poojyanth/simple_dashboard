import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useParams } from "react-router-dom";
import StatCard from './StatCard';
import ChartCard from './ChartCard';
import AnnouncementSection from './AnnouncementSection';
import ScheduleSection from './ScheduleSection';
import RecentActivity from './RecentActivity';

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
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="dashboard-content">
          <h2 className="dashboard-title">Dashboard</h2>
          <div className='content-section'>
            <div className='content-subsection'>
              <div className="stat-cards">
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

              <div className="chart-cards">
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

              <div className="other-sections">
                <AnnouncementSection announcements={data.announcements} />
              </div>
            </div>
            <div className='content-subsection'>
              <RecentActivity />
              <ScheduleSection schedules={data.schedules} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
