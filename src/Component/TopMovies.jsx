import React from "react";

// COMPONENTS
import Card from "./Card";

const TopMovies = () => {
  return (
    <>
      <div className="top-movies">
        <h1 className="top-movies-headline">Top Rated Movies</h1>
        <div className="top-movies-container">
          <Card />
        </div>
      </div>
    </>
  );
};

export default TopMovies;
