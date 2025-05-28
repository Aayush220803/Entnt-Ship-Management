import React, { useState, useContext } from 'react';
import { ShipsContext } from '../../contexts/ShipsContext';

const ShipForm = () => {
  const { addShip } = useContext(ShipsContext);
  const [formData, setFormData] = useState({
    name: '',
    imo: '',
    flag: '',
    status: 'Active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newShip = { ...formData, id: Date.now().toString() };
    console.log('Adding ship:', newShip); // Debug line (optional)
    addShip(newShip);
    setFormData({ name: '', imo: '', flag: '', status: 'Active' });
  };

  return (
    <div className="side-panel">
      <h3>Add New Ship</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ship Name</label>
        <input
          name="name"
          placeholder="Ship Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="imo">IMO Number</label>
        <input
          name="imo"
          placeholder="IMO Number"
          value={formData.imo}
          onChange={handleChange}
          required
        />

        <label htmlFor="flag">Flag</label>
        <input
          name="flag"
          placeholder="Flag"
          value={formData.flag}
          onChange={handleChange}
          required
        />

        <label htmlFor="status">Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Under Maintenance">Under Maintenance</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button type="submit">Add Ship</button>
      </form>
    </div>
  );
};

export default ShipForm;