import { useState } from 'react';
import TextField from '@mui/material/TextField';
import style from '../styles/ReviewMain.module.css'

const ReviewForm = ({addReview}) => {

    const [review, setReview] = useState({
    name: '',
    text: ''
    });

    const handleSubmit = (e) => {
    e.preventDefault();
    addReview(review);
    setReview({name: '', text: ''});

    }
    
    return (

<form className="form" onSubmit={handleSubmit} required> 
  <div className="user-info">
      <h2>Оставьте свой отзыв:</h2>
      
      <div className="text-input">
        
        <TextField 
        className={style.TextField}

        id="name" label="Имя" variant="filled" value={review.name}
        onChange={e => setReview({...review, name: e.target.value})}
        required />
        <div>
        <TextField 
        className={style.TextField}
        id="comment"  
        label="Ваш отзыв" 
        variant="filled"  
        multiline
          maxRows={4}
        value={review.text} 
        onChange={e => setReview({...review, text: e.target.value})} 
        required />
        </div>
      </div>
  </div> 

    <button type="submit">Отправить</button>
      
</form>
      
    )
    
    }
export default ReviewForm