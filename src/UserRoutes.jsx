import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));

const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
// const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

const MovieCastPage = lazy(() => import('pages/MovieCastPage/MovieCastPage'));
const MovieReviewsPage = lazy(() =>
  import('pages/MovieReviewsPage/MovieReviewsPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="credits" element={<MovieCastPage />} />
          <Route path="reviews" element={<MovieReviewsPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
