import footer from '../styles/Footer.module.css';

const Footer = () => {
    return (
      <footer className={footer.footer}>
      <div className={footer.links}>
      <a  href="/">Главная</a>
      <a  href="/orders">Заказы</a>
      <a  href="/contacts">Контакты</a>
      </div >
        <p className={footer.copyright}>
          &copy; {new Date().getFullYear()} Metal Core
        </p>
      </footer>
    );
  }
  
  export default Footer;