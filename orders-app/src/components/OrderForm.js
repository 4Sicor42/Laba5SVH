import React, { useState } from 'react';
import styles from '../styles/OrderForm.module.css';
import OrderImage from '../components/OrderImage'
import OrderSucces from '../components/OrderSucces.js';

const OrderForm = ({ order }) => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');

const [count, setCount] = useState(order.count);
const [phone, setPhone] = useState('');
const [lastname, setLastname] = useState('');



const handleCountChange = (e) => {
setCount(e.target.value);
}

const handlePhoneChange = (e) => {
setPhone(e.target.value);
}

const handleLastNameChange = (e) => {
setLastname(e.target.value);
}

const handleNameChange = (e) => {
setName(e.target.value);
}

const handleEmailChange = (e) => {
setEmail(e.target.value);
}

const [isSent, setIsSent] = useState(false);

const handleSubmit = () => {

  // логика отправки заказа

  setIsSent(true);
};

return (
    <>
    {!isSent && (
      <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.order}>
      <h2>Оформление заказа</h2>
      <div className={styles.image}>
            <OrderImage order={order} />  
      </div>
      </div>
      <div className={styles.product}>
      <h3>Продукт: {order.product}</h3>
      <p>Количество: {order.count}</p>  
      <p>Состояние: {order.status}</p>
      <p>Цена: {order.price}</p>
      </div>
        <div className={styles.details}>
        <div >
          <label htmlFor="name">Имя</label>
          <input 
            type="text" 
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
      
        <div > 
        <label htmlFor="lastname">Фамилия</label> 
        <input type="text" 
              id="lastname" 
              value={lastname} 
              onChange={handleLastNameChange} 
              required /> 
          </div>
      
        <div >  
          <label htmlFor="email">Email</label>
          <input
            type="email" 
            id="email"
            value={email}
            onChange={handleEmailChange} 
            required
          />
        </div>
        <div > 
        <label htmlFor="phone">Телефон</label> 
        <input type="tel" 
          id="phone" 
          value={phone} 
          onChange={handlePhoneChange} 
          required /> 
        </div>
      
        <div className={styles.count}> 
        <label htmlFor="count">Количество</label> 
        <select id="count" value={count} onChange={handleCountChange}> { [...Array(order.count).keys()].map(x => <option key={x+1}>{x+1}</option> ) } </select>
        </div>
      
        
        <button type="submit" className={styles.submit}>
          Оформить заказ
        </button>
        </div>
      </form>
    )}

{isSent && (
    
      <OrderSucces
        />
    )}
  </>
)
}

export default OrderForm