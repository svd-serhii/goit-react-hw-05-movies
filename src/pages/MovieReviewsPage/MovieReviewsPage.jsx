import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieReviewsPage.module.css';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

import { getMovieReviews } from '../../services/api';

const MovieReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      setIsLoading(true);
      try {
        const result = await getMovieReviews(id);
        setReviews([...result]);
        if (!result.length) {
          toast.warn('There is no review about this movie');
        }
      } catch (error) {
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
      {error && toast.error('Something goes wrong. Please try again later.')}
      <ul className={styles.review__list}>{elements}</ul>
    </>
  );
};
export default MovieReviewsPage;
