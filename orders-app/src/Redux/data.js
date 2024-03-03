  
  export const updateOrder = async (updatedOrder) => {

    const index = orders.findIndex(order => order.id === updatedOrder.id)
  

    orders[index] = updatedOrder;
  
    return updatedOrder;
  }