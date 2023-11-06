import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Заголовок приложения</h1>
      
      <nav>
        <ul>
          <li><a href="/">Главная</a></li> 
          <li><a href="/orders">Заказы</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;