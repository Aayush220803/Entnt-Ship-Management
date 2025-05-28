import React, { useContext } from 'react';
import { ComponentsContext } from '../../contexts/ComponentsContext';

const ComponentList = ({ shipId }) => {
  const { components, deleteComponent } = useContext(ComponentsContext);
  const filtered = components.filter(c => c.shipId === shipId);

  return (
   <div className="card component-list-container">
  <h4>Components for this Ship</h4>
  {filtered.length === 0 ? (
    <p>No components found.</p>
  ) : (
    <ul className="component-list">
      {filtered.map(comp => (
        <li key={comp.id} className="component-item">
          <div className="component-details">
            <strong>{comp.name}</strong> (SN: {comp.serialNumber}) — Installed: {comp.installDate}, Last Maintenance: {comp.lastMaintenanceDate}
          </div>
          <button className="delete-btn" onClick={() => deleteComponent(comp.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )}
</div>

  );
};

export default ComponentList;
