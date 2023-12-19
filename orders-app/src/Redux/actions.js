import { orders, updateOrder } from '../Redux/data';

export const LOAD_ORDERS = 'LOAD_ORDERS';
export const UPDATE_ORDER = 'UPDATE_ORDER';

export const loadOrders = () => ({
  type: LOAD_ORDERS,
  payload: orders  
});

export const updateOrderAction = (order) => async (dispatch) => {
  await updateOrder(order);
  dispatch({ type: UPDATE_ORDER, payload: order });
}