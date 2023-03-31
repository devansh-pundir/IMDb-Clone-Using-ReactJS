import React from 'react'
// COMPONENTS
import Navbar from './Component/Navbar'
import Carousel from './Component/Carousel'
import Hero from './Component/Hero'
import TopMovies from './Component/TopMovies'

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Carousel />
        <Hero />
        <TopMovies />
        <footer className="footer">
          <div className='footer-content'>
            <h1 className="footer-headline">Let's Connect</h1>
            <a href="mailto:devanshpundir91@gmail.com" target="_blank" className="mail">@devanshpundir91</a>
            <br />
            <a href="https://devanshpundir.netlify.app/" target="_blank" className="portfolio">devanshpundir.netlify.app</a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App