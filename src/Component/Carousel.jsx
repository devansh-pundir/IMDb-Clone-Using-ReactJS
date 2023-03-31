import React, { useEffect, useState } from "react";

// COMPONENTS
import Card from "./Card";

const Hero = () => {
  // FIXING NEXT & PREV ACTION ON REFRESH
  const [count, setCount] = useState(0);

  // NEXT & PREV FUNCTIONALITY
  const box = document.querySelector(".card-container");

  // PREV FUNCTION
  const prev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    setCount(count + 1);
  };

  // NEXT FUNCTION
  const next = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    setCount(count + 1);
  };

  // PASSING STATE
  useEffect(() => {
    setCount(count + 1);
  }, []);

  return (
    <>
      <h1 className="popular-headline">Popular Movies</h1>
      <div className="carousel">
        <button className="left" onClick={prev}>
          &lt;
        </button>
        <button className="right" onClick={next}>
          &gt;
        </button>
        <div className="card-container">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Hero;
