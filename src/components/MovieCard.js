
import { Link } from 'react-router-dom';

function MovieCard({cardProps}) {
  const img_path = "https://image.tmdb.org/t/p/w500";
  return (
      <div className="card m-2" style={{width: "18rem"}}>
        <Link to={`/moviepage/${cardProps.id}`}><img src={`${img_path}${cardProps.poster_path}`} className="card-img-top" alt="..."/></Link>
        <div className="card-body">
          <h5 className="card-title">{cardProps.title}</h5>
          <p className="card-text">{cardProps.release_date}</p>
          <p className="card-text">vote: {cardProps.vote_average}</p>
        </div>
      </div>
  );
}

export default MovieCard;
