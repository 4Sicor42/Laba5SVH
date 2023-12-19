import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>Metal Core</a>
      <nav>
        <a href="/">Главная</a>
        <a href="/orders">Продукты</a>
      </nav>
    </header>
  );
}

export default Header;