import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieByQuery } from '../../services/api';

import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
// import { smoothScroll } from '../../utils/smoothScroll';
import { toast } from 'react-toastify';

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovies = async () => {
      // if (!search) {
      //   return;
      // }
      setIsLoading(true);
      try {
        const { results } = await getMovieByQuery(search);
        setFilms([...results]);
        setIsLoading(false);
      } catch (error) {
        toast.warn(`${error.message}`);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (search) {
      fetchMovies();
    }
  }, [search, error]);

  const handleSearchSubmit = searchText => {
    if (search !== searchText) {
      setSearchParams({ search });
      setFilms([]);
      setError(null);
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="mainTitle">Search movie</h1>
      {isLoading && <Loader />}
      {error && <p>Something goes wrong. Please try again later.</p>}
      <SearchForm onSubmit={handleSearchSubmit} />
      {<MoviesList films={films} />}
    </div>
  );
};

export default MoviesPage;
