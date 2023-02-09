import { NavLink } from 'react-router-dom';
import items from './items';
import styles from './Menu.module.css';

const getFullName = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
};

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={getFullName} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>{elements}</ul>
      </nav>
    </div>
  );
};

export default Navbar;
