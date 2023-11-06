import React from 'react';


const Orders = ({orders}) => {
return (
<div>
<h2>Список заказов</h2>
{orders.map(order => (
        <OrderItem key={order.id} order={order}/>  
      ))}
</div>
);
}

const OrderItem = ({order}) => {

    return (
      <div className="order">
        <h3>Поставщик : {order.customer}</h3>  
        <p>Продукт: {order.product}</p>
        <p>Количиство : {order.count}</p>
        <p>Состояние : {order.status}</p>
        <img src={require(`../../public/${order.image}.jpg`)} alt={order.product} />
      </div>
    )
  
  }


export default Orders