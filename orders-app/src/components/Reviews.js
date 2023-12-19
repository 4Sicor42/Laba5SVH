import { useState } from 'react';
import Review from '../components/ReviewComponent.js';
import ReviewForm from '../components/ReviewForm.js';
import '../styles/ReviewMain.module.css';


const Reviews = () => {

const [reviews, setReviews] = useState([
{
id: 1,
name: 'Иван Иванов',
text: 'Отличный сервис!'
},
{
id: 2,
name: 'Петр Петров',
text: 'Быстро и качественно'
}
]);

const addReview = (review) => {
review.id = Date.now();
setReviews([...reviews, review]);
}

return (
<div className="reviews">
{reviews.map(review => (
<Review key={review.id} review={review} />
))}
<ReviewForm addReview={addReview} />
</div>
)
}
export default Reviews;