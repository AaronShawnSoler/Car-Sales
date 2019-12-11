import React, { useContext } from 'react';
import { RemoveFeatureContext } from '../contexts/contexts';

const AddedFeature = props => {

  const removeItem = useContext(RemoveFeatureContext);

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeItem(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
