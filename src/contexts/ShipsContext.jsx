
import React, { createContext, useState, useEffect } from 'react';
import { getData, setData } from '../utils/localStorageUtils';

export const ShipsContext = createContext();

export const ShipsProvider = ({ children }) => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const storedShips = getData('ships');
    setShips(storedShips || []);
  }, []);

  const addShip = (ship) => {
    const updated = [...ships, ship];
    setShips(updated);
    setData('ships', updated);
  };

  const updateShip = (updatedShip) => {
    const updated = ships.map(s => s.id === updatedShip.id ? updatedShip : s);
    setShips(updated);
    setData('ships', updated);
  };

  const deleteShip = (id) => {
    const updated = ships.filter(s => s.id !== id);
    setShips(updated);
    setData('ships', updated);
  };

  return (
    <ShipsContext.Provider value={{ ships, addShip, updateShip, deleteShip }}>
      {children}
    </ShipsContext.Provider>
  );
};