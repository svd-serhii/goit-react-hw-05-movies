import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
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
import { toast } from 'react-toastify';

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
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        const result = await getMovieDetails(id);
        setFilm({ ...result });
      } catch (error) {
        toast.error(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const genresList = film.genres
    ? film.genres.map(genre => genre.name).join(' / ')
    : '';

  return (
    <div className="container">
      {isLoading && <Loader />}
      {error && <p>Something goes wrong. Please try again later.</p>}
      <button type="button" onClick={goBack} className={styles.btnBack}>
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
          className={styles.filmPoster}
        />
        <div className={styles.filmInfo}>
          <h2 className={styles.filmTitle}>{film.original_title}</h2>
          <p className={styles.filmScore}>User score: {film.vote_average}</p>
          <h3 className={styles.filmTitleOverview}>Overview</h3>
          <p className={styles.filmTextOverview}>{film.overview}</p>
          <h3 className={styles.filmTitleGenres}>Genres</h3>
          <p className={styles.filmListGenres}>{genresList}</p>
        </div>
      </div>
      <div className={styles.addInfoContainer}>
        <h2 className={styles.addInfoTitle}>Additional Information</h2>
        <ul className={styles.addInfoList}>
          <li className={styles.addInfoItem}>
            <NavLink
              state={{ from }}
              to={`/movies/${id}/credits`}
              className={getFullName}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.addInfoItem}>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

MovieDetails.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};

export default MovieDetails;
