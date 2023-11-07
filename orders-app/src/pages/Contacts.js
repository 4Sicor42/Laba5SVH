import React from 'react';
import styles from '../styles/Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      
      <h2>Контактная информация</h2>

      <div className={styles.info}>

        <h3>Адрес</h3>
        <p>г. Москва, ул. Садовая, д.5</p>

      </div>

      <div className={styles.info}>

        <h3>Телефон</h3> 
        <p>+7 (495) 123-45-67</p>

      </div>

      <div className={styles.info}>

        <h3>Email</h3>
        <p>info@company.ru</p>

      </div>
    </div>
  )
}

export default Contacts;