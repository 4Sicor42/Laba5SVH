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

      <div className={styles.maps}>
        <iframe
          title="Как нас найти" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.0151530447115!2d37.62092915593221!3d55.75357618120778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a636edcd2ad%3A0x4c2ca101e2c8c27d!2z0JrQvtC90Y7RiNC10L3QvdCw0Y8g5LiJ6YOo!5e0!3m2!1sru!2sru!4v1653026426954!5m2!1sru!2sru" 
          width="600" 
          height="450"
          style={{border: 0}}
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  )
}

export default Contacts;