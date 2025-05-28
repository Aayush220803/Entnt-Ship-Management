import React, { useState, useEffect } from 'react';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState(() => {
    return JSON.parse(localStorage.getItem('notifications')) || [];
  });

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'notifications') {
        setNotifications(JSON.parse(e.newValue) || []);
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const dismiss = (id) => {
    const updated = notifications.filter(n => n.id !== id);
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  return (
    <div className="card">
      <h3>Notifications</h3>
      {notifications.length === 0 ? (
        <p>No notifications.</p>
      ) : (
        <ul>
          {notifications.map(n => (
            <li key={n.id}>
              {n.message}
              <button onClick={() => dismiss(n.id)} style={{ marginLeft: '10px' }}>Dismiss</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationCenter;
