import React, { createContext, useState, useEffect } from 'react';
import { getData, setData } from '../utils/localStorageUtils';

export const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = getData('jobs');
    setJobs(storedJobs || []);
  }, []);

  const addJob = (job) => {
    const updated = [...jobs, job];
    setJobs(updated);
    setData('jobs', updated);
  };

  const updateJob = (updatedJob) => {
    const updated = jobs.map(j => j.id === updatedJob.id ? updatedJob : j);
    setJobs(updated);
    setData('jobs', updated);
  };

  const deleteJob = (id) => {
    const updated = jobs.filter(j => j.id !== id);
    setJobs(updated);
    setData('jobs', updated);
  };

  return (
    <JobsContext.Provider value={{ jobs, addJob, updateJob, deleteJob }}>
      {children}
    </JobsContext.Provider>
  );
};
