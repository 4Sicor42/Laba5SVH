import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Metal Core</h1>
      <nav>
        <a href="/">Главная</a>
        <a href="/orders">Заказы</a>
      </nav>
    </header>
  );
}

export default Header;