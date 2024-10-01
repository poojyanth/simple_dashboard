import React from 'react';
import graph1 from '../assets/Frame 52.png';

const ChartCard = ({ title, value, subtext, change }) => (
  <div className="chartCard">
    <div className='chartCard-innerdiv'>
      <div className='chartCard-innerdiv2'>
        <h2 className="">{title}</h2>
        <h1 className="">{value}</h1>
        <p className="">{subtext}</p>
      </div>
      <img src={graph1} alt=""/> 
    </div>
  </div>
);

export default ChartCard;