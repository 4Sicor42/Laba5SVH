import React from 'react';
import ordersitem from '../styles/OrderItem.module.css';

const Orders = ({orders}) => {
return (
<div className={orders.orders}>
<h2>Список заказов</h2>
{orders.map(order => (
        <OrderItem key={order.id} order={order}/>  
      ))}
</div>
);
}

const OrderItem = ({order}) => {

    return (
      <div className={ordersitem.item}>
        <h3 className={ordersitem.h3}>Поставщик : {order.customer}</h3>  
        <p className={ordersitem}>Продукт: {order.product}</p>
        <p className={ordersitem}>Количиство : {order.count}</p>
        <p className={ordersitem}>Состояние : {order.status}</p>
        <div className={ordersitem.imageswrapper}>
        <img className={ordersitem.imageswrapper} src={require(`../../public/${order.image}.png`)} alt={order.product} />
        </div>
        
      </div>
    )
  
  }



export default Orders