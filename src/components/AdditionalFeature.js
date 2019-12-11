import React, { useContext } from 'react';
import { BuyItemContext } from '../contexts/contexts';

const AdditionalFeature = props => {

  const addItem = useContext(BuyItemContext);

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => addItem(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
