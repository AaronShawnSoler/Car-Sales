import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
// import { reducer, initialState } from './reducers/reducer';
import { BuyItemContext, RemoveFeatureContext } from './contexts/contexts';
import { addItem, removeItem } from './actions/actions';

const App = (props) => {

  // const [state, dispatch] = useReducer(reducer, initialState);

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeItem(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addItem(item);
  };

  // console.log('state', state);
  console.log('props', props);

  return (
    <RemoveFeatureContext.Provider value={removeFeature}>
      <BuyItemContext.Provider value={buyItem}>
        <div className="boxes">
          <div className="box">
            <Header car={props.car} />
            <AddedFeatures car={props.car} />
          </div>
          <div className="box">
            <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
            <Total car={props.car} additionalPrice={props.additionalPrice} />
          </div>
        </div>
      </BuyItemContext.Provider>
    </RemoveFeatureContext.Provider>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {addItem, removeItem})(App);
