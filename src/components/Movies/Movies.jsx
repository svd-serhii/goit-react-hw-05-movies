import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api';
import { smoothScroll } from 'utils/smoothScroll';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import styles from './Movies.module.css';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const api = async () => {
      setIsLoading(true);
      try {
        const data = await getTrendingMovies(page);
        if (page === 1) {
          return setFilms([...data.results]);
        }
        setFilms(prevFilms => [...prevFilms, ...data.results]);
        setIsVisible(data.page < Math.ceil(data.total_results / data.per_page));
        smoothScroll();
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    api();
  }, [page]);

  const LoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Error</p>}
      {<MoviesList films={films} />}
      {isVisible && (
        <button className={styles.btnLm} type="button" onClick={LoadMore}>
          Load More
        </button>
      )}
    </>
  );
};

export default Movies;
