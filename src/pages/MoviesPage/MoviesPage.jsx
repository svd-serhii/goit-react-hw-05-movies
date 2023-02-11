import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieByQuery } from '../../services/api';

import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import { smoothScroll } from '../../utils/smoothScroll';
import { toast } from 'react-toastify';

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        const { response } = await getMovieByQuery(search);
        setFilms([...response.results]);
        if (response.length === 0) {
          setFilms([]);
          setIsLoading(false);
          toast.warn('No search results . Please try something else');

          return Promise.reject(
            new Error(`There is no movie with name ${search}`)
          );
        }
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

  useEffect(() => {
    if (films.length > 20) {
      smoothScroll();
    }
  }, [films]);

  const handleSearchSubmit = searchText => {
    if (search !== searchText) {
      setSearchParams({ search: searchText });
      setFilms([]);
      setError(null);
    }
  };

  return (
    <div className="container">
      <h1 className="mainTitle">Search movie</h1>
      <SearchForm onSubmit={handleSearchSubmit} />
      {films.length > 0 && <MoviesList films={films} />}
      {isLoading && <Loader />}
      {error && <p>Something goes wrong. Please try again later.</p>}
    </div>
  );
};

MoviesPage.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesPage;
