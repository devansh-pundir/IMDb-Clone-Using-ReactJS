import React, { useEffect, useState } from "react";

// API LINK
const link =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en- US";

const Card = () => {
  // STATE DECLARATION
  const [movie, setMovie] = useState([]);

  //   FETCHING DATA
  useEffect(() => {
    const get = async () => {
      let promise = await fetch(link);
      let data = await promise.json();
      setMovie(data.results);
    };
    get();
  }, []);

  return (
    <>
      {movie.map((value, index, movie) => {
        return (
          <>
            <div className="card-item">
              <div className="card-img">
                <img
                  src={`https://image.tmdb.org/t/p/original/${value.poster_path}`}
                  alt="Poster"
                />
              </div>
              <div className="card-content">
                <h1 className="movie-title">{value.original_title}</h1>
                <p className="movie-vote-average">{value.vote_average}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
