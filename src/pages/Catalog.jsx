import React from 'react'

import PageHeader from '../components/page-header/PageHeader';

import { useParams } from 'react-router-dom'

import { category as cate, category } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';

const Catalog = () => {

  // lấy đường dẫn router : movies, signup, tv, .....
  const {slug} = useParams();
  const { keyword } = useParams();
  console.log('slug catalog:', slug)
  console.log("keyword catalog:", keyword);
  // console.log('adaa')
  // const category = slug || keyword ;

  let title = ""; 

  if (slug !== undefined) {
    slug === cate.movie ? title="Movies" : title="TV Series";
  }
  

  return (
    <>
      <PageHeader>{title}</PageHeader>

      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={slug} keyword = {keyword}/>
        </div>
      </div>
    </>
  );
}

export default Catalog