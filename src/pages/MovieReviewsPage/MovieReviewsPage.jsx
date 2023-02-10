import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieReviewsPage.module.css';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

import { getMovieReviews } from '../../services/api';
// import defaultImg from '../../images/default_poster.jpg';

const MovieReviewsPage = () => {
  const [reviews, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      setIsLoading(true);
      try {
        const result = await getMovieReviews(id);
        setReview(result);
      } catch (error) {
        toast.error(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReview();
  }, [id]);

  const elements = reviews.map(({ id, author, content }) => (
    <li className={styles.review__item} key={id}>
      <p className={styles.review__author}>Author:{author}</p>
      <p className={styles.review__text}>{content}</p>
    </li>
  ));
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Unexpected error. Please try again later.</p>}
      {reviews.length > 0 && (
        <ul className={styles.review__list}>{elements}</ul>
      )}
      {reviews.length === 0 && (
        <p className={styles.errorMsg}>There is no review about this movie</p>
      )}
    </>
  );
};
export default MovieReviewsPage;
