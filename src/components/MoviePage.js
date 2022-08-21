import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";

function MoviePage() {
  let {movie_id} = useParams();
  const [details, setDetails] = useState([]);
  const baseURL1 =  `https://api.themoviedb.org/3/movie/${movie_id}?api_key=3dc31d13a1def3b73eb6691b25ebf475&language=en-US`;
  useEffect(() => {
    axios.get(baseURL1).then((response) => {
      setDetails(response.data);
    });
  }, [baseURL1]);
  let {title, overview, poster_path} = details;

  const [video, setVideo] = useState([]);
  const baseURL2 =  `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=3dc31d13a1def3b73eb6691b25ebf475&language=en-US`;
  useEffect(() => {
    axios.get(baseURL2).then((response) => {
      setVideo(response.data.results[response.data.results.length - 1]);
    }).catch(function (error) {
      console.log(error);
    });
  }, [baseURL2]);

  let vid = video? video.key : null;
  return (
    <>
      <main style={{background:`url(https://image.tmdb.org/t/p/original${poster_path})`, backgroundSize:"cover", height:"100%", width:"auto"}}>
        <div className="p-4" style={{width:"640px"}}>
          <h1 className="mb-2" style={{background:"rgba(255, 255, 255, 0.25)", width:"100%", padding:"4px"}}>{title}</h1>
          <iframe className="mb-2" width="100%" height="320" src={`https://www.youtube.com/embed/${vid}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div style={{background:"rgba(255, 255, 255, 0.25)", width:"100%", padding:"4px"}}>
            <p className="mb-2">{overview}</p>
            <Link to="/">Go back to home</Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default MoviePage;
