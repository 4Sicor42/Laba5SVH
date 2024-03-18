import { LOAD_ORDERS} from '../Redux/actions/load';
import { UPDATE_ORDER} from '../Redux/actions/update';

const initialState = {
  orders: []
};

export default function reducer (state = initialState, action) {
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