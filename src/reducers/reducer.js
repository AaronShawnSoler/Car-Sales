import { ADD, REMOVE } from '../actions/actions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const reducer = (state = initialState, action) => {
    console.log('Action', action);
    switch(action.type) {
        case ADD:
            return {
                ...state,
                car: {
                    price: state.car.price,
                    name: state.car.name,
                    image: state.car.image,
                    features: [
                        ...state.car.features,
                        action.payload
                    ]
                }
            }
        case REMOVE:
            return {
                ...state,
                car: {
                    price: state.car.price,
                    name: state.car.name,
                    image: state.car.image,
                    features: state.car.features.filter(feature => feature !== action.payload)
                }
            }
        default:
            return state;
    }
}