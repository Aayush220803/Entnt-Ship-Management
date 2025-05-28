import React from 'react';
import { useNavigate } from 'react-router-dom';
import KPICards from '../components/Dashboard/KPICards';
import Charts from '../components/Dashboard/Charts';

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h1 className="logo">SHIP MAINTENANCE</h1>
        <nav>
          <a className="nav-link active" onClick={() => navigate('/dashboard')}>Dashboard</a>
          <a className="nav-link" onClick={() => navigate('/ships')}>Ships</a>
          <a className="nav-link" onClick={() => navigate('/jobs')}>Jobs</a>
        </nav>
      </aside>

      <main className="main">
        <h2 className="title">Dashboard</h2>

        {/* KPI Cards */}
        <div className="cards-row">
          <KPICards />
        </div>

        {/* Charts Section */}
        <div className="charts-wrapper">
          <Charts />
        </div>

        <div className="bottom-row">
          {/* Quick Action Buttons */}
          <div className="actions">
            <div className="action" onClick={() => navigate('/ships')}>Manage Ships ➔</div>
            <div className="action" onClick={() => navigate('/ships')}>Manage Components ➔</div>
            <div className="action" onClick={() => navigate('/jobs')}>Manage Jobs ➔</div>
          </div>

          {/* Notifications Section */}
          <div className="notifications">
            <h3>Notifications</h3>
            <div className="notif">Engine component #7 is overdue for maintenance <span>2h ago</span></div>
            <div className="notif">New job assigned: Hull inspection for 55 Oceaview <span>1d ago</span></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
