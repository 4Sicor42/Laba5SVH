import React, {useState} from 'react';
import styles from '../styles/Home.moudule.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate();

  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.home}>
      
      <div className={styles.content}>

        <h1>Заголовок</h1>

        <p>
          Описание сайта 
          <a href="#" onClick={() => navigate('/contacts')}>Подробнее</a>
        </p>

        <button 
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? 'Узнать больше!' : 'Узнать больше'}
        </button>

      </div>

    </div>
  )

}

export default Home;