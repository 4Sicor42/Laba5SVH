import guest from '../assets/guest.png';
import styles from '../styles/Review.module.css';
import Avatar from '@mui/material/Avatar';


const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <div className={styles.ava}>
      <Avatar  alt="User avatar" src={guest} className={styles.avatar} />
      </div>
      <div className={styles.text}>
        <b className={styles.name}>{review.name}</b>
        <p className={styles.comment}>{review.text}</p>
      </div>
    </div>
  );
}

export default Review;