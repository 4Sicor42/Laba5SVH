import {updateOrder } from '../data';

export const updateOrderAction = (order) => async (dispatch) => {
    await updateOrder(order);
    dispatch({ type: UPDATE_ORDER, payload: order });
  }

  export const UPDATE_ORDER = 'UPDATE_ORDER';