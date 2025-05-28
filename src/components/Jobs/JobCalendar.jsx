import React, { useContext } from 'react';
import { JobsContext } from '../../contexts/JobsContext';

const JobCalendar = () => {
  const { jobs } = useContext(JobsContext);
  const days = [...new Set(jobs.map(job => job.scheduledDate))];

  return (
    <div className="card">
      <h3>Maintenance Calendar</h3>
      {days.length === 0 && <p>No scheduled jobs.</p>}
      <ul>
        {days.map(date => (
          <li key={date}>
            <strong>{date}</strong>
            <ul>
              {jobs
                .filter(job => job.scheduledDate === date)
                .map(job => (
                  <li key={job.id}>
                    {job.type} — {job.status} ({job.priority})
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobCalendar;
