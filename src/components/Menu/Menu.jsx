import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import items from './items';
import styles from './Menu.module.css';

const getFullName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

const Navbar = () => {
  const elements = items.map(({ id, text, to }) => (
    <li key={id}>
      <NavLink className={getFullName} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className="container">
      <nav className={styles.nav}>
        <ul className={styles.menu}>{elements}</ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default Navbar;
