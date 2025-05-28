import React from 'react';
import { useParams } from 'react-router-dom';
import ComponentForm from '../components/Components/ComponentForm';
import ComponentList from '../components/Components/ComponentList';

const ShipDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Manage Components for Ship ID: {id}</h2>
      <ComponentForm defaultShipId={id} />
      <ComponentList shipId={id} />
    </div>
  );
};

export default ShipDetailPage;
