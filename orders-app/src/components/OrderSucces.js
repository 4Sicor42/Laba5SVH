import styles from '../styles/OrderSucces.module.css';
import { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';

function OrderSuccess() {

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  }

  if(!isOpen) return null;

  return (
    <div className={styles.popup}>
      <div className={styles.popupinner}>
       
        <h3>Заказ на покупку  принят! < CheckCircleOutlineIcon/></h3>
      
        <p>Спасибо, Ваш заказ принят. С Вами скоро свяжутся.</p>

        <Button 
        color="Charcoal" 
        size="small"  
        variant="contained"
        className={styles.closebtn}
        onClick={handleClose} >Закрыть</Button>

      </div>
    </div>
  );
}

export default OrderSuccess;
