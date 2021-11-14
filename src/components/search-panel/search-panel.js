import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {statusSearch} from "../../actions";
import "./search-panel.scss";

const SearchPanel = () => {
  const [search, setSearch] = useState(useSelector((state) => state.status.search));
  const dispatch = useDispatch();

  const onSearchChange = (e) => {
    const search = e.target.value;
    dispatch(statusSearch(search));
    setSearch(search);
  };

  return (
    <div className="search__block">
      <input  type="text"
              className="search__input"
              placeholder="Поиск по имени"
              value={search}
              onChange={onSearchChange} />
    </div>
  )
};

export default SearchPanel;
