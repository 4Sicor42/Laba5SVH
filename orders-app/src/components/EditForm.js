import { useState, useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { updateOrderAction } from '../Redux/actions/update';

import TextField from '@mui/material/TextField';

const EditForm = ({order}) => {

  const [formData, setFormData] = useState({
    product: order.product,
    count: order.count,
    customer: order.customer,
    status: order.status,
    price: order.price,
    image: order.image,
    additionalInfo: order.additionalInfo
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const dispatch = useDispatch();

    const handleSubmit = () => {
    dispatch(updateOrderAction(formData));
} 

  useEffect(() => {
    setFormData(order);
  }, [order]);

  return (
    <form onSubmit={handleSubmit}>
      
      <label>
        Продукт:
        <TextField
          label="Multiline"
          type="text"
          name="product" 
          value={formData.product}
          onChange={handleChange}
        />
      </label>

      <label>
        Количество:
        <TextField
          type="number"  
          name="count"
          value={formData.count}
          onChange={handleChange} 
        />

      </label>

      <label>
        Заказчик:
        <TextField
          type="text"
          name="customer"
          value={formData.customer} 
          onChange={handleChange} 
        />
      </label>

      <label>
        Статус:
        <TextField
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
        />

      </label>

      <label>
        Цена:
        <TextField
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange} 
        />
      </label>

      <label>
        Изображение:
        <TextField
          type="text" 
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </label>

      <label>
        Дополнительная информация:
        <TextField
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}  
          multiline
          maxRows={4}
        />
      </label>

      <button type="submit">Сохранить</button>

    </form>
  )
}

export default EditForm