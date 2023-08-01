import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';

function Filter() {
  const filter = useSelector(state => state.filters.filter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
}

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
