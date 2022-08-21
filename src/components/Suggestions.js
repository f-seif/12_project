import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {createMovie} from '../redux/suggestionsSlice';
import MovieCard2 from './MovieCard2';

function Suggestions() {
  const [data,setData] = useState(
    {
      poster_path:"",
      vote_average: 0,
      title:"",
    }
  );
  const handleInputChange = (e) => {
    e.preventDefault();
    setData({...data, [e.target.name] : e.target.value})
  }
  const dispatch = useDispatch();
  const AddMovie = (e) => {
    e.preventDefault();
    dispatch(createMovie(data))
  }
  const suggestions = useSelector((state) => state.suggestions.moviesData);
  return (
    <>
      <main>
        <div className="p-4">
          <h4>Suggested movies</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="m-2">
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal">Add movie</button>
          </div>
          <div className="container m-2">
            <div className="row">
              {
                suggestions.map((el, i) => <MovieCard2 key={i} cardProps={el}/>)
              }
            </div>
          </div>
          <div id="modal" className="modal fade" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Enter new movie details</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form className="modal-body" name="newMovieForm" onSubmit={AddMovie}>
                  <input type="text" name="title" className="form-control mb-2" placeholder="Enter movie name" aria-label="" onChange={handleInputChange} />
                  <input type="url" name="poster_path" className="form-control mb-2" placeholder="Enter movie image url" aria-label="" onChange={handleInputChange} />
                  <input type="number" name="vote_average" min="0" max="5" className="form-control mb-2" placeholder="Enter movie rating" aria-label="" onChange={handleInputChange} />
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button id="sc" type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Suggestions;
