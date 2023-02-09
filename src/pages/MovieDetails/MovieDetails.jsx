import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Suspense } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import styles from './MovieDetails.module.css';
import Loader from 'components/Loader/Loader';
import defaultImg from '../../images/default_poster.jpg';

const getFullName = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
};

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const from = location.state?.from || '/movies';
  const goBack = () => navigate(from);

  useEffect(() => {
    const api = async () => {
      setIsLoading(true);
      try {
        const result = await getMovieDetails(id);
        setFilm({ ...result });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    api();
  }, [id]);

  const genresList = film.genres
    ? film.genres.map(genre => genre.name).join(' / ')
    : '';

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      {error && <p>Unexpected error. Please try again later.</p>}
      <button type="button" onClick={goBack} className="btn">
        Go back
      </button>
      <div className={styles.filmCard}>
        <img
          src={
            film.poster_path
              ? `https://image.tmdb.org/t/p/original/${film.poster_path}`
              : defaultImg
          }
          alt={film.original_title}
          width="270"
        />
        <div className={styles.film__info}>
          <h2 className={styles.film__title}>{film.original_title}</h2>
          <p className={styles.film__score}>User score: {film.popularity}</p>
          <h3 className={styles.film__titleOverview}>Overview</h3>
          <p className={styles.film__textOverview}>{film.overview}</p>
          <h3 className={styles.film__titleGenres}>Genres</h3>
          <p className={styles.film__listGenres}>{genresList}</p>
        </div>
      </div>
      <div>
        <h2>Additional Information</h2>
        <ul className={styles.addInfo__list}>
          <li className={styles.addInfo__item}>
            <NavLink
              state={{ from }}
              to={`/movies/${id}/credits`}
              className={getFullName}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.addInfo__item}>
            <NavLink
              state={{ from }}
              to={`/movies/${id}/reviews`}
              className={getFullName}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
