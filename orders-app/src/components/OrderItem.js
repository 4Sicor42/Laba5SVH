import React from 'react';
import ordersitem from '../styles/OrderItem.module.css';
import OrderPopup from '../components/OrderPopup'
import OrderImage from '../components/OrderImage'


const OrderItem = ({ order }) => {

return (
<div className={ordersitem.item}>
  <OrderPopup 
    order={order}  
    />

  <p className={ordersitem}>Продукт: {order.product}</p>
  <p className={ordersitem}>Количество : {order.count}</p>  
  <p className={ordersitem}>Состояние : {order.status}</p>
  <p className={ordersitem}>Цена : {order.price}</p>

  <OrderImage order={order}/>

</div>
);
}

export default OrderItem;