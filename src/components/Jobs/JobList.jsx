import React, { useContext, useState } from 'react';
import { JobsContext } from '../../contexts/JobsContext';
import { ShipsContext } from '../../contexts/ShipsContext';
import { ComponentsContext } from '../../contexts/ComponentsContext';

const JobList = () => {
  const { jobs, updateJob } = useContext(JobsContext);
  const { ships } = useContext(ShipsContext);
  const { components } = useContext(ComponentsContext);

  const [filter, setFilter] = useState({ shipId: '', status: '', priority: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFilter(prev => ({ ...prev, [name]: value }));
  };

  const filteredJobs = jobs
  .filter(job => ships.some(s => s.id === job.shipId)) // Exclude jobs with deleted ships
  .filter(job =>
    (!filter.shipId || job.shipId === filter.shipId) &&
    (!filter.status || job.status === filter.status) &&
    (!filter.priority || job.priority === filter.priority)
  );
  const handleStatusChange = (id, status) => {
    const job = jobs.find(j => j.id === id);
    updateJob({ ...job, status });
  };

  return (
    <div className="job-list-card">
      <h3 className="job-list-title">Jobs List</h3>

      <div className="filter-container">
        <select
          className="filter-select"
          name="shipId"
          onChange={handleChange}
          value={filter.shipId}
          aria-label="Filter by Ship"
        >
          <option value="">All Ships</option>
          {ships.map(ship => (
            <option key={ship.id} value={ship.id}>{ship.name}</option>
          ))}
        </select>

        <select
          className="filter-select"
          name="status"
          onChange={handleChange}
          value={filter.status}
          aria-label="Filter by Status"
        >
          <option value="">All Status</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          className="filter-select"
          name="priority"
          onChange={handleChange}
          value={filter.priority}
          aria-label="Filter by Priority"
        >
          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <ul className="job-list">
        {filteredJobs.map(job => {
          const comp = components.find(c => c.id === job.componentId);
          const ship = ships.find(s => s.id === job.shipId);

          // Priority badge colors
          const priorityClass = job.priority.toLowerCase();

          return (
            <li key={job.id} className="job-list-item">
              <div className="job-info">
                <strong>{job.type}</strong>{' '}
                <span className={`priority ${priorityClass}`}>({job.priority})</span>{' '}
                on <em>{comp?.name || 'Unknown Component'}</em> - <u>{ship?.name || 'Unknown Ship'}</u>
              </div>

              <div className="status-container">
                <label htmlFor={`status-${job.id}`} style={{marginRight: '8px', color: '#9ca3af'}}>
                  Status:
                </label>
                <select
                  id={`status-${job.id}`}
                  className="status-select"
                  value={job.status}
                  onChange={(e) => handleStatusChange(job.id, e.target.value)}
                >
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default JobList;
