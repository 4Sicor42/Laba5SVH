import React from 'react';
import OrdersList from '../components/OrdersList';
import style from '../styles/OrderItem.module.css';

const Orders = ({orders}) => {
return (
<div className={style.item}>
<h2 >Список продацев</h2>
<OrdersList orders={orders} />
</div>
);
}

export default Orders;