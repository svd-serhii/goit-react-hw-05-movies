import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import styles from './MoviesList.module.css';
import defaultImg from '../../images/default_poster.jpg';

const MoviesList = ({ films }) => {
  const location = useLocation();
  const items = films.map(({ id, title, poster_path }) => (
    <li key={id} className={styles.filmsItem}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original/${poster_path}`
              : defaultImg
          }
          alt={title}
          className={styles.moviePoster}
          loading="lazy"
        ></img>
        <p className={styles.movieTitle}>{title} </p>
      </Link>
    </li>
  ));
  return <ul className={styles.filmsList}>{items} </ul>;
};

MoviesList.propTypes = {
  films: PropTypes.array,
};

export default MoviesList;
