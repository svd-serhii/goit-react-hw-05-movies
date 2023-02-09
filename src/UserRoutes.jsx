import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import MovieCastPage from 'pages/MovieCastPage/MovieCastPage';
import MovieReviewsPage from 'pages/MovieReviewsPage/MovieReviewsPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="credits" element={<MovieCastPage />} />
        <Route path="reviews" element={<MovieReviewsPage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default UserRoutes;
