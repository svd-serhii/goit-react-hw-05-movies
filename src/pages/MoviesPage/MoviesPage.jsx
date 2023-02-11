import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieByQuery } from '../../services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        const { response } = await getMovieByQuery(query);
        setFilms([...response]);
        if (response.length === 0) {
          setFilms([]);
          toast.warn('No search results . Please try something else');
        }
      } catch (error) {
        toast.error(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [query, error]);

  const handleSearchSubmit = query => {
    setSearchParams({ query: query });
    setFilms([]);
    setError(null);
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

export default MoviesPage;
