import React from 'react';
import JobList from '../components/Jobs/JobList';
import JobForm from '../components/Jobs/JobForm';
import JobCalendar from '../components/Jobs/JobCalendar';
import { useState } from "react";

const JobsPage = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="container">
      <h2>Maintenance Jobs</h2>
      <div className="page-content">
        <aside className="side-panel">
          <h3>Create New Job</h3>
          <JobForm />
        </aside>
        <section className="main-panel">
          <div className="jobs-header">
            <h3>Job List</h3>
            <button
              className="toggle-calendar-btn"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              {showCalendar ? "Hide Calendar" : "Show Calendar"}
            </button>
          </div>
          <JobList />
          {showCalendar && (
            <div className="calendar-wrapper">
              <JobCalendar />
            </div>
          )}
        </section>
      </div>
    </div>

  );
};


export default JobsPage;
