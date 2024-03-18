const orders = [{

}];

fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => {
        orders = data;
      })
      .catch(error => {
        console.error(error);
      });

export const LOAD_ORDERS = 'LOAD_ORDERS';


export const loadOrders = () => ({
  type: LOAD_ORDERS,
  payload: orders  
});
