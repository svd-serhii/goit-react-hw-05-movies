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
        const response = await getMovieReviews(id);
        setReviews([...response.results]);
        if (response.results.length === 0) {
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

  const elements = reviews.map(({ id, author, content }, idx) => {
    return (
      <li className={styles.reviewItem} key={id + idx}>
        <p className={styles.reviewAuthor}>Author: {author}</p>
        <p className={styles.reviewText}>{content}</p>
      </li>
    );
  });
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something goes wrong. Please try again later.</p>}
      <ul className={styles.reviewList}>{elements}</ul>
    </>
  );
};
export default MovieReviewsPage;
