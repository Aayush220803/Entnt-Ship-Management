import React, { useContext } from 'react';
import { ShipsContext } from '../../contexts/ShipsContext';
import { JobsContext } from '../../contexts/JobsContext';
import { ComponentsContext } from '../../contexts/ComponentsContext';
import {FaWrench, FaExclamationTriangle } from 'react-icons/fa';
import { AiOutlineFileDone } from "react-icons/ai";
import { RiShip2Fill } from "react-icons/ri";

const KPICards = () => {
  const { ships = [] } = useContext(ShipsContext);
  const { jobs = [] } = useContext(JobsContext);
  const { components = [] } = useContext(ComponentsContext);

  const jobsInProgress = jobs.filter(job => job.status === 'In Progress');
  const jobsCompleted = jobs.filter(job => job.status === 'Completed');

  const overdueComponents = components.filter(c => {
    if (!c.lastMaintenanceDate) return false;
    const date = new Date(c.lastMaintenanceDate);
    const sixMonthsAgo = new Date(Date.now() - 15552000000); // ~6 months
    return date < sixMonthsAgo;
  });


const kpiData = [
  { label: 'Total Ships', value: ships.length, icon: <RiShip2Fill/> },
  { label: 'Jobs In Progress', value: jobsInProgress.length, icon: <FaWrench /> },
  { label: 'Jobs Completed', value: jobsCompleted.length, icon: <AiOutlineFileDone /> },
  { label: 'Overdue Components', value: overdueComponents.length, icon: <FaExclamationTriangle /> },
];

  return (
    <div className="cards-row">
      {kpiData.map((item, idx) => (
        <div className="card" key={idx}>
          <div className="icon">{item.icon}</div>
          <div>
            <p className="label">{item.label}</p>
            <p className="value">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPICards;
