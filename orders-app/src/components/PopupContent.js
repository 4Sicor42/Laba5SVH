import React, {useState} from 'react';
import orderspop from '../styles/Popup.module.css';
import OrderForm from'../components/OrderForm.js'
import Button from '@mui/material/Button';
import EditForm from '../components/EditForm.js';

import store from '../Redux/store';
import { Provider } from 'react-redux';

const PopupContent = ({order, closePopup}) => {

    const [isBuying, setIsBuying] = useState(false);
  
    const [isEditing,setIsEditing]= useState(false);

    const handleEditing = () =>{
      setIsEditing(true);
    }

    const handleBuy = () => {
      setIsBuying(true);
    }
  
    if(isBuying) {
      return <OrderForm order={order} />
    }

    if(isEditing){
      return <Provider store={store}> <EditForm order={order} /> </Provider>
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
          color="Steel"
        >
          Купить
          </Button>
  
        <Button 
        className={orderspop.mui}
        variant="contained"
        
          onClick={closePopup}
          color="Steel"
        >Закрыть</Button>

        <Button 
        className={orderspop.mui}
        variant="contained"
        
          onClick={handleEditing}
          color="Steel"
        >Изменить данные</Button> 
        </div>    
      </div>
    );
  }
export default PopupContent