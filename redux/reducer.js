import {ADD_ITEM} from './actions';

const INITIAL_STATE = {
  cartItems: []
};

export default function cartReducer(state = INITIAL_STATE , action)  {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems:[state.cartItems, action.payload]
        
      }
      ;
    default:
      return state;
  }
};

