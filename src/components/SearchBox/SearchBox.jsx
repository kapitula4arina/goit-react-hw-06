import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  return (
    <div className="container">
      <div className={css.searchBox}>
        <p className={css.text}>Find contacts by name</p>
        <input
          className={css.input}
          type="text"
          value={filter}
          placeholder="enter name"
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </div>
    </div>
  );
};

export default SearchBox;
