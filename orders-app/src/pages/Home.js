import React, {useState} from 'react';
import styles from '../styles/Home.moudule.css';


const Home = () => {


  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.home}>
      
      <div className={styles.content}>

        <h1>Заголовок</h1>
        <a 
        href="/Contacts"
          onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
          {hovered ? 'Узнать больше!' : 'Узнать больше'}
          </a>
      </div>

    </div>
  )

}

export default Home;