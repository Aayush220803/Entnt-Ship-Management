import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShipsContext } from '../../contexts/ShipsContext';

const ShipList = () => {
  const { ships, deleteShip } = useContext(ShipsContext);

  return (
    <div className="card">
      <h3>Ship List</h3>
      {ships.length === 0 && <p>No ships added yet.</p>}
      <ul>
        {ships.map(ship => (
          <li key={ship.id} style={{ marginBottom: '10px' }}>
            <Link to={`/ships/${ship.id}`}>
              <strong>{ship.name}</strong> ({ship.imo}) - {ship.status}
            </Link>
            <button onClick={() => deleteShip(ship.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipList;
