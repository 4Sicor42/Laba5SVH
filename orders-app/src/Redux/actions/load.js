import { orders } from '../data';

export const LOAD_ORDERS = 'LOAD_ORDERS';


export const loadOrders = () => ({
  type: LOAD_ORDERS,
  payload: orders  
});
