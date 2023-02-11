import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieCastPage.module.css';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

import { getMovieCredits } from '../../services/api';
import defaultImg from '../../images/default_poster.jpg';

const MovieCastPage = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      setIsLoading(true);
      try {
        const result = await getMovieCredits(id);
        setCast([...result.cast]);
      } catch (error) {
        toast.error(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [id]);

  const elements = cast.map(
    ({ id, name, original_name, profile_path, character }, idx) => {
      return (
        <li className={styles.cast__item} key={id + idx}>
          <img
            className={styles.cast__img}
            src={
              profile_path === null
                ? defaultImg
                : `https://image.tmdb.org/t/p/w300/${profile_path}`
            }
            alt={name ?? original_name}
            loading="lazy"
          />
          {name ?? original_name}

          <p className={styles.cast__char}>Character: {character}</p>
        </li>
      );
    }
  );
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Unexpected error. Please try again later.</p>}
      {cast.length > 0 && <ul className={styles.cast__list}>{elements}</ul>}
      {!error && !isLoading && cast.length === 0 && (
        <p className={styles.errorMsg}>There is no information about cast</p>
      )}
    </>
  );
};
export default MovieCastPage;
