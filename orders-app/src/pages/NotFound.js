import styles from '../styles/ErrorPage.module.css';
import backbutton from '../styles/Button.module.css';
import notFoundImage from '../assets/404.png';
import ButtonLink from '../components/BackButton';

const ErrorPage = () => {

return (
<div className={styles.errorContainer}>
<img 
    className={styles.errorImage}
    src={notFoundImage} 
    alt="404"
  />
  <p className={styles.errorMessage}>
    Страница не найдена
  </p>

  <ButtonLink className={backbutton} />

</div>
)
}

export default ErrorPage