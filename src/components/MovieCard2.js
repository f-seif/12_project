

function MovieCard2({cardProps}) {
  return (
      <div className="card m-2" style={{width: "18rem"}}>
        <img src={`${cardProps.poster_path}`} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{cardProps.title}</h5>
          <p className="card-text">{cardProps.vote_average}</p>
        </div>
      </div>
  );
}

export default MovieCard2;
