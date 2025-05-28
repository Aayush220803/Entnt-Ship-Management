import React, { useContext, useState, useEffect } from 'react';
import { ComponentsContext } from '../../contexts/ComponentsContext';
import { ShipsContext } from '../../contexts/ShipsContext';

const ComponentForm = ({ defaultShipId }) => {
  const { addComponent } = useContext(ComponentsContext);
  const { ships } = useContext(ShipsContext);

  const [form, setForm] = useState({
    name: '',
    serialNumber: '',
    installDate: '',
    lastMaintenanceDate: '',
    shipId: defaultShipId || (ships.length > 0 ? ships[0].id : ''),
  });

  useEffect(() => {
    if (defaultShipId) {
      setForm(prev => ({ ...prev, shipId: defaultShipId }));
    }
  }, [defaultShipId]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addComponent({ ...form, id: Date.now().toString() });
    setForm({
      name: '',
      serialNumber: '',
      installDate: '',
      lastMaintenanceDate: '',
      shipId: defaultShipId || (ships.length > 0 ? ships[0].id : ''),
    });
  };

  return (
    <div className="side-panel">
      <h3>Add New Component</h3>
      <form onSubmit={handleSubmit}>
        {!defaultShipId && (
          <>
            <label htmlFor="shipId">Select Ship</label>
            <select name="shipId" value={form.shipId} onChange={handleChange} required>
              {ships.map(ship => (
                <option key={ship.id} value={ship.id}>
                  {ship.name}
                </option>
              ))}
            </select>
          </>
        )}

        <label htmlFor="name">Component Name</label>
        <input
          name="name"
          placeholder="Component Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="serialNumber">Serial Number</label>
        <input
          name="serialNumber"
          placeholder="Serial Number"
          value={form.serialNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="installDate">Install Date</label>
        <input
          type="date"
          name="installDate"
          value={form.installDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastMaintenanceDate">Last Maintenance Date</label>
        <input
          type="date"
          name="lastMaintenanceDate"
          value={form.lastMaintenanceDate}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Component</button>
      </form>
    </div>
  );
};

export default ComponentForm;
