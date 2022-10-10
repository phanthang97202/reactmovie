import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import './movie-list.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
// import { Link } from 'react-router-dom';
// import Button from '../button/Button';
import tmdbApi, {category} from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import MovieCard from '../movie-card/MovieCard';

const MovieList = props => {

  const [items, setItems] = useState([])

  useEffect( () => {
    const getList = async () => {
        let response = null;
        const params = {};
        if(props.type !== 'similar'){
            switch(props.category){
                case category.movie:
                    // console.log(response)
                    response = await tmdbApi.getMoviesList(props.type, {params});
                    console.log( 'response movie list',response); break;
                default:
                    // console.log(response);
                    response = await tmdbApi.getTvList(props.type, {params})    
            }
        }else{
            // console.log(response);
            response = await tmdbApi.similar(props.category, props.id)
        }
        // get data 
        setItems(response.results)
    }
    getList()
  }, [] ) 

  console.log(items)
  
  return (
    <div className="movie-list">
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
      >
        {/* map data movies  */}
        {items.map((item, i ) => (
          
            <SwiperSlide key={i}>
                {/* <img src={apiConfig.w500Image(item.poster_path) } alt="" />  */}

                {/* movie card item  */}
                <MovieCard item={item} category={props.category} />
            </SwiperSlide>            
        ))}
      </Swiper>
    </div>
  );
}

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList