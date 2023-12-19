import React, { useState } from 'react';
import styles from '../styles/OrderForm.module.css';
import OrderImage from '../components/OrderImage'
import OrderSucces from '../components/OrderSucces.js';

import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
        <div className={styles.field}>
        <TextField
          required
          label="Имя"
          type="text" 
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        </div>
      
        <div className={styles.field}> 
        <TextField
          label="Фамилия"
          type="text" 
          id="lastname" 
          value={lastname} 
          onChange={handleLastNameChange} 
          required 
        />
          </div>
      
        <div className={styles.field}>  
        <TextField
          label="Email"
          type="email" 
            id="email"
            value={email}
          onChange={handleEmailChange} 
          required 
        />
        </div>
        <div className={styles.field}> 
        <TextField
          label="Телефон"
          type="tel" 
          id="phone"
          value={phone}
          onChange={handlePhoneChange} 
          required 
        />
        </div>
      
        <div className={styles.count}> 
        
        <InputLabel id="demo-simple-select-standard-label">Количество</InputLabel>
        <select id="count" value={count} onChange={handleCountChange}> { [...Array(order.count).keys()].map(x => <option key={x+1}>{x+1}</option> ) } </select>
        </div >
        <div className={styles.submit}>
        <Button color="Ash" size="small"  variant="contained" type="submit" >Оформить заказ</Button>
        </div>
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