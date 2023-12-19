import footer from '../styles/Footer.module.css';

import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';

const Footer = () => {
  return (
  <footer className={footer.footer}>
  <div className={footer.links}>
  <a href="/">Главная</a>
  <a href="/orders">Продукты</a>
  <a href="/contacts">Контакты</a>
  </div>
  <div className={footer.sociallinks}> 

    <a href="https://facebook.com">
      <img src={facebook} alt="Facebook"/>
    </a>

    <a href="https://instagram.com">
      <img src={instagram} alt="Instagram"/>  
    </a>

  </div>
    <p className={footer.copyright}>
      © {new Date().getFullYear()} Metal Core
    </p>
  </footer>
  );
  }

  export default Footer