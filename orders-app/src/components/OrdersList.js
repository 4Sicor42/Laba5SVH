import React from 'react';
import OrderItem from '../components/OrderItem';

const OrdersList = ({orders}) => {
return (
<div>
{orders.map(order => (
<OrderItem key={order.id} order={order}/>
))}
</div>
);
}

export default OrdersList;