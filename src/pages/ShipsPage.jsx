import React, { useContext } from 'react';
import { ShipsContext } from '../contexts/ShipsContext';
import { Link } from 'react-router-dom';
import ShipForm from '../components/Ships/ShipForm';

const ShipsPage = () => {
  const { ships, deleteShip } = useContext(ShipsContext);

  return (
    <div className="container">
      <h2>Manage Ships</h2>
      <div className="page-content">
        <aside className="side-panel">
          <ShipForm />
        </aside>

        <section className="main-panel">
          <h3>All Ships</h3>
          <ul className="ship-list">
            {ships.map((ship) => (
              <li key={ship.id} className="ship-item">
  <div className="ship-details">
    <strong>{ship.name}</strong>
  </div>
  <div className="ship-actions">
    <Link to={`/ships/${ship.id}`} className="action-btn manage-btn">
      Manage Components
    </Link>
    <button className="action-btn delete-btn" onClick={() => deleteShip(ship.id)}>
      Delete
    </button>
  </div>
</li>

            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ShipsPage;
