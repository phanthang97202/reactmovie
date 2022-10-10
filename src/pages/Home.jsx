import React from 'react'
import { OutlineButton } from '../components/button/Button'
import { Link } from 'react-router-dom'

import HeroSlide from '../components/hero-slide/HeroSlide'
import MovieList from '../components/movie-list/MovieList'
import { category, movieType, tvType } from '../api/tmdbApi'

// import { useContext } from 'react'
// import { CartContext } from '..'


const Home = () => {

  // const dataContext = useContext(CartContext)
  // console.log("dataContext", dataContext);

  return (
    <>
      {/* banner phim  */}
      <HeroSlide />

      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/category/movie">
              <OutlineButton className="small">View Mores</OutlineButton>
            </Link>
          </div>
          {/* gọi theo danh mục phim */}
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top rated movies</h2>
            <Link to="/category/movie">
              <OutlineButton className="small">View Mores</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Tivi</h2>
            <Link to="/category/tv">
              <OutlineButton className="small">View Mores</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Tivi</h2>
            <Link to="/category/tv">
              <OutlineButton className="small">View Mores</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
}

export default Home