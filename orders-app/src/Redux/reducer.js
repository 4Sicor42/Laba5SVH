import { LOAD_ORDERS, UPDATE_ORDER } from '../Redux/actions';

const initialState = {
  orders: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOAD_ORDERS: 
      return { ...state, orders: action.payload };
      
    case UPDATE_ORDER:
      return {
        ...state,
        orders: state.orders.map(o => 
          o.id === action.payload.id ? action.payload : o
        )  
      };

    default:
      return state;
  }
}