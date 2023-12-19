import { useNavigate } from 'react-router-dom';
import styles from '../styles/Button.module.css';

const ButtonLink = () => {

const navigate = useNavigate();

const handleClick = () => {
navigate('/');
}

return (
<button className={styles.button} onClick={handleClick} >
На главную
</button>
)

}

export default ButtonLink