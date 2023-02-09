import Movies from '../../components/Movies/Movies';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="mainTitle">Trending today</h1>
      <Movies />
    </div>
  );
};

export default HomePage;
