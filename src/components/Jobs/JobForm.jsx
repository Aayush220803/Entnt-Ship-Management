import React, { useState, useContext } from 'react';
import { JobsContext } from '../../contexts/JobsContext';
import { ComponentsContext } from '../../contexts/ComponentsContext';
import { ShipsContext } from '../../contexts/ShipsContext';

const JobForm = () => {
  const { addJob } = useContext(JobsContext);
  const { components } = useContext(ComponentsContext);
  const { ships } = useContext(ShipsContext);

  const [form, setForm] = useState({
    componentId: '',
    shipId: '',
    type: 'Inspection',
    priority: 'Medium',
    status: 'Open',
    assignedEngineerId: '3',
    scheduledDate: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.shipId || !form.componentId) return;
    addJob({ ...form, id: Date.now().toString() });
    setForm({ ...form, componentId: '', shipId: '', scheduledDate: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>Create Job</h3>
      <select name="shipId" value={form.shipId} onChange={handleChange} required>
        <option value="">Select Ship</option>
        {ships.map(s => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>

      <select name="componentId" value={form.componentId} onChange={handleChange} required>
        <option value="">Select Component</option>
        {components
          .filter(c => c.shipId === form.shipId)
          .map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
      </select>

      <input type="text" name="type" value={form.type} onChange={handleChange} placeholder="Job Type" />
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <input type="date" name="scheduledDate" value={form.scheduledDate} onChange={handleChange} required />
      <button type="submit">Create Job</button>
    </form>
  );
};

export default JobForm;
