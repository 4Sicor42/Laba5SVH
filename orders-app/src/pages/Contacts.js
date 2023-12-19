import React from 'react';
 
import styles from '../styles/Contacts.module.css';

import Reviews from '../components/Reviews';

import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Contacts = () => {
  return (
  <div>

<div className={styles.contacts}>

  <h2>Контактная информация</h2>

  <div className={styles.info}>

    <h3>Адрес <ContactMailOutlinedIcon/></h3>
    <p>г. Москва, ул. Садовая, д.5</p>

  </div>

  <div className={styles.info}>

    <h3>Телефон <CallOutlinedIcon/></h3> 
    <p>+7 (495) 123-45-67</p>

  </div>

  <div className={styles.info}>

    <h3>Email <EmailOutlinedIcon/></h3>
    <p>info@company.ru</p>

  </div>
</div>
  <div className={styles.reviewsBlock}> 
    <h3 className={styles.reviewsTitle}> Наши клиенты: </h3> 
      <div className={styles.feedback}> 
        <Reviews /> 
      </div> 
    </div>
  </div>
  )
  }
  
  export default Contacts