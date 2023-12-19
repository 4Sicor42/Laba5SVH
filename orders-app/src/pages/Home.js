import React, {useState} from 'react';
import styles from '../styles/Home.module.css';
import LinkButton from '../components/LinkButton';

const Home = () => {
  const [hovered, setHovered] = useState(false);
  return (
    
    <div className={styles.home}>
      
      <div className={styles.content}>

        <h1>Учет заказов на изготовление продукции промышленного предприятия</h1>
        <h2>Наша компания предоставляет широкий спектор услуг, например таких как:</h2>
        <div>

        <div>
          <h3>Прием и обработка заказов</h3>
          <p>Мы принимаем и обрабатываем заказы</p>
        </div>

        <div>  
          <h3>Планирование производства</h3>  
          <p>Осуществляем планирование производственных</p>
        </div>

        <div>
          <h3>Логистика и доставка</h3>
          <p>Организация логистики и своевременная доставка</p>
        </div>
        <h3>Заинтересовались? жмите на кнопку ниже, для получения информации</h3>
        </div>
        <div>
        <LinkButton hovered={hovered} setHovered={setHovered} />
        </div>
      </div>

    </div>
  )

}

export default Home;