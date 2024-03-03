import { useState, useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { updateOrderAction } from '../Redux/actions/update';

const EditForm = ({order}) => {

  const [formData, setFormData] = useState({
    product: order.product,
    count: order.count,
    // и другие поля
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
        <input 
          type="text"
          name="product"
          value={formData.product}
          onChange={handleChange} 
        />
      </label>

      <label>
        Количество: 
        <input
          type="number" 
          name="count"
          value={formData.count}
          onChange={handleChange}
        />  
      </label>

      // остальные поля

      <button type="submit">Сохранить</button>

    </form>
  )
}

export default EditForm