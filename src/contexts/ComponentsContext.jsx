import React, { createContext, useState, useEffect } from 'react';
import { getData, setData } from '../utils/localStorageUtils';

export const ComponentsContext = createContext();

export const ComponentsProvider = ({ children }) => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const storedComponents = getData('components');
    setComponents(storedComponents || []);
  }, []);

  const addComponent = (component) => {
    const updated = [...components, component];
    setComponents(updated);
    setData('components', updated);
  };

  const updateComponent = (updatedComponent) => {
    const updated = components.map(c => c.id === updatedComponent.id ? updatedComponent : c);
    setComponents(updated);
    setData('components', updated);
  };

  const deleteComponent = (id) => {
    const updated = components.filter(c => c.id !== id);
    setComponents(updated);
    setData('components', updated);
  };

  return (
    <ComponentsContext.Provider value={{ components, addComponent, updateComponent, deleteComponent }}>
      {children}
    </ComponentsContext.Provider>
  );
};
