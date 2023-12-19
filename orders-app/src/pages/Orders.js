import React from 'react';
import OrdersList from '../components/OrdersList';
import style from '../styles/OrderItem.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Orders = ({orders}) => {
return (
<div className={style.item}>
<h2 >Список продацев <ShoppingCartIcon/></h2>
<OrdersList orders={orders} />
</div>
);
}

export default Orders;