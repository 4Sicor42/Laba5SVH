import React from 'react';
import styles from '../styles/Orders.module.css';
import stylesItem from '../styles/OrderItem.module.css';

const Orders = ({orders}) => {
return (
<div className={styles.orders}>
<h2>Список заказов</h2>
{orders.map(order => (
        <OrderItem key={order.id} order={order}/>  
      ))}
</div>
);
}

const OrderItem = ({order}) => {

    return (
      <div className={stylesItem.item}>
        <h3>Поставщик : {order.customer}</h3>  
        <p>Продукт: {order.product}</p>
        <p>Количиство : {order.count}</p>
        <p>Состояние : {order.status}</p>
        <img src={require(`../../public/${order.image}.png`)} alt={order.product} />
      </div>
    )
  
  }



export default Orders