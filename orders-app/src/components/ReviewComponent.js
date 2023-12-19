import guest from '../assets/guest.png';
import styles from '../styles/Review.module.css';

const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <img 
        className={styles.avatar} 
        src={guest}
        alt="User avatar" 
      />

      <div className={styles.text}>
        <b className={styles.name}>{review.name}</b>
        <p className={styles.comment}>{review.text}</p>
      </div>
    </div>
  );
}

export default Review;