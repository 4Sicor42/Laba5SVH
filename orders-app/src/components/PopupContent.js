import React, {useState} from 'react';
import orderspop from '../styles/Popup.module.css';
import OrderForm from'../components/OrderForm.js'
import Button from '@mui/material/Button';

const PopupContent = ({order, closePopup}) => {

    const [isBuying, setIsBuying] = useState(false);
  
    const handleBuy = () => {
      setIsBuying(true);
    }
  
    if(isBuying) {
      return <OrderForm order={order} />
    }
  
    return (
      <div className={orderspop.modal}>
        <p>Просмотр информации</p>  
        <p>Дополнительная информация: {order.additionalInfo}</p>
        <div  >
        <Button 
        className={orderspop.mui}
        variant="contained"
          onClick={handleBuy}
        >
          Купить
          </Button>
  
        <Button 
        className={orderspop.mui}
        variant="contained"
        
          onClick={closePopup}
        
        >Закрыть</Button>
        </div>    
      </div>
    );
  }
export default PopupContent