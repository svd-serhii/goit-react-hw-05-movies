import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSistrix } from 'react-icons/fa';
import styles from './SearchForm.module.css';
import { toast } from 'react-toastify';

const SearchForm = ({ onSubmit }) => {
  const [request, setRequest] = useState('');

  const handleChange = e => {
    setRequest(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.PreventDefault();
    if (request.trim() === '') {
      toast.error('Please enter your search data.');
      return;
    }
    onSubmit(request);
    setRequest('');
    e.currentTarget.reset();
  };

  return (
    <div className={styles.formWrap}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.searchFormButton}>
          <FaSistrix size={20} />
          <span className={styles.searchFormButtonLabel}></span>
        </button>

        <input
          className={styles.searchFormInput}
          type="text"
          name="request"
          autoComplete="off"
          autoFocus
          value={request}
          placeholder="Search movies"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
