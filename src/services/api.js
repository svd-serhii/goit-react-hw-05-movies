import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'c780801336e7f1f89f24f8fc75df6bab',
  },
});

export const getTrendingMovies = async page => {
  const { data } = await instance.get(`/trending/movie/day?`, {
    params: {
      page,
    },
  });
  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await instance.get(`search/movie`, {
    params: {
      query,
    },
  });
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
