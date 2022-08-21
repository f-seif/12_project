import MovieCard from './MovieCard';
import React, { useEffect, useState } from "react";
import axios from "axios";
import {useSelector} from 'react-redux';

function MovieList() {


  const [movies, setMovies] = useState([]);
  const baseURL = ' https://api.themoviedb.org/3/movie/popular?api_key=3dc31d13a1def3b73eb6691b25ebf475&language=en-US&page=1';
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMovies(response.data.results);
    }).catch(function (error) {
      // handle error

    })
  }, []);
  const select = useSelector((state) => state.genres.select);
  const sortSelect = useSelector((state) => state.sortSelect.sortSelect);
  let sortedMovies;
  switch (sortSelect) {
    case "Oldest":
      sortedMovies = movies.sort(function(a, b) {
        if (a.release_date < b.release_date) {
          return -1;
        }
        if (a.release_date > b.release_date) {
          return 1;
        }
        return 0;
      });
      break;
    case "AtoZ":
      sortedMovies = movies.sort(function(a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      break;
    case "ZtoA":
      sortedMovies = movies.sort(function(a, b) {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      });
      break;
    default:
      sortedMovies = movies.sort((a, b) => {
        if (a.release_date < b.release_date) {
          return 1;
        }
        if (a.release_date > b.release_date) {
          return -1;
        }
        return 0;
      })
  }
  const selectedMovies = sortedMovies.filter(
    (movie) => {
      return select === "All" ? true : movie.genre_ids.includes(Number(select));
    }
  );
  const searchTerm = useSelector((state) => state.searchTerm.keyword);
   const rateV = useSelector((state) => state.rate.rateValue);
  const filteredMovies = selectedMovies.filter(
    (movie) =>  movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
    && movie.vote_average >= rateV
)
  return (
    <div className="container">
      <div className="row">
        {
          filteredMovies.map((el, movie_id) => <MovieCard key={movie_id} cardProps={el}/>)
        }
      </div>
    </div>
  );
}

export default MovieList;
