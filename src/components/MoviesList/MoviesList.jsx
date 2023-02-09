import { useLocation, Link } from 'react-router-dom';
import styles from './MoviesList.module.css';

const MoviesList = ({ films }) => {
  const location = useLocation();
  const items = films.map(({ id, title, poster_path }) => (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <img src={poster_path} alt={title} className={styles.moviePoster}></img>
        <p className={styles.movieTitle}>{title} </p>
      </Link>
    </li>
  ));
  return <ul className={styles.trendList}>{items} </ul>;
};

export default MoviesList;
