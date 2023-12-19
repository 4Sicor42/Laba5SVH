import styles from '../styles/OrderSucces.module.css';
import { useState } from 'react';

function OrderSuccess() {

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  }

  if(!isOpen) return null;

  return (
    <div className={styles.popup}>
      <div className={styles.popupinner}>
        
        <h3>Заказ на покупку  принят!</h3>

        <p>Спасибо, Ваш заказ принят. С Вами скоро свяжутся.</p>

        <button
          className={styles.closebtn}
          onClick={handleClose}
        >
          Закрыть
        </button>

      </div>
    </div>
  );
}

export default OrderSuccess;
