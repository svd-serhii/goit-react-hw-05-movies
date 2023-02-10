import Movies from '../../components/Movies/Movies';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className={styles.mainTitle}>Trending today</h1>
      <Movies />
    </div>
  );
};

export default HomePage;
