import React, { useEffect, useState } from "react";
import axios from "axios";

import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {search} from '../redux/searchSlice';
import {searchRate} from '../redux/rateSlice';
import {changeSelect} from '../redux/genresSlice';
import {changeSortSelect} from '../redux/sortSlice';

function SearchNav() {
  const [genres, setGenres] = useState([]);
  const baseURL = ' https://api.themoviedb.org/3/genre/movie/list?api_key=3dc31d13a1def3b73eb6691b25ebf475&language=en-US';
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGenres(response.data.genres);
    });
  }, []);



  const dispatch = useDispatch();

  const sortSelect = useSelector((state) => state.sortSelect.sortSelect);
  const handleSortSelect=(e) => {
    e.preventDefault();
    dispatch(changeSortSelect({
      sortSelect: e.target.value
    }))
  }

  const keyword = useSelector((state) => state.searchTerm.keyword);
  const handleSearch=(e) => {
    e.preventDefault();
    dispatch(search({
      keyword: e.target.value
    }))
  }

  const rateValue = useSelector((state) => state.rate.rateValue);
  const handleRating=(e) => {
    e.preventDefault();
    dispatch(searchRate({
      rateValue: e.target.value
    }))
  }

  var options = [];
  for (let i = 0; i < genres.length; i++) {
    options.push(<option value={genres[i].id} key={i}>{genres[i].name}</option>);
  }
  const select = useSelector((state) => state.genres.select);
  var areOptionsLoaded = false;
  useEffect(() => {
    areOptionsLoaded = true;
  }, [options]);
  const handleSelect=(e) => {
    e.preventDefault();
    if (areOptionsLoaded){
      dispatch(changeSelect({
        select: e.target.value
      }))
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="d-flex p-2">
        <div className="input-group m-2" style={{minWidth:"300px"}}>
          <select className="form-select input-group-text" style={{minWidth:"120px"}} value={select} onChange={handleSelect}>
            <option value="All">All</option>
            {options}
          </select>
          <input type="text" className="form-control" placeholder="Enter movie name" aria-label="Username" value={keyword} onChange={handleSearch} style={{width:"180px"}}/>
        </div>
        <select className="form-select m-2" style={{minWidth:"120px", width: "180px"}} value={sortSelect} onChange={handleSortSelect}>
          <option value="Latest">Latest</option>
          <option value="Oldest">Oldest</option>
          <option value="AtoZ">AtoZ</option>
          <option value="ZtoA">ZtoA</option>
        </select>
        <div className="input-group m-2">
          <span className="input-group-text">vote average &ge;</span>
          <input type="number" min="0" max="10" step="0.5" className="form-control flex-grow-0" placeholder="Enter rating" aria-label="rating" value={rateValue} onChange={handleRating} style={{width:"80px"}}/>
        </div>
      </div>
    </nav>
  );
}

export default SearchNav;
