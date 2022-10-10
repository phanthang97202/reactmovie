import React, { useEffect, useState, useRef } from 'react';

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Modal, {ModalContent} from '../modal/Modal'

import Button , {OutlineButton} from "../button/Button"

import tmdbApi, {category, movieType} from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './hero-slide.scss';

import { useHistory } from 'react-router-dom';

const HeroSlide = () => {

    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([])

    useEffect( () => {
        const getMovies = async () => {
            const params = {
              page: 1
            }
            try{
                const response = await tmdbApi.getMoviesList(movieType.popular, {params})
                console.log('params heroslide', params)
                // const newA = response.results.slice(0, 4);
                // console.log(newA)
                
                setMovieItems(response.results.slice(6, 9))
                // console.log(response)
            }catch{
                console.log('error')
            }
        }
        getMovies();
    }, [])

    //backdrop_path
    return (
      <div className="hero-slide">
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          // spaceBetween={0}
          slidesPerView={1}
        >
          {movieItems.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                // <img src={apiConfig.originalImage(item.backdrop_path)} />
                <HeroSlideItem
                  item={item}
                  className={`${isActive ? "active" : ""}`}
                />
              )}
              {/* <img
                src="https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg"
                alt=""
              /> */}
            </SwiperSlide>
          ))}
        </Swiper>
        {movieItems.map((item, i) => <TrailerModal key={i} item={item} />)}
      </div>
    ); 
}

// watch now and watch trailer 

const HeroSlideItem = props => {
  // điều hướng router => push('...')
  let history = useHistory()
  console.log('history', history)

  const item = props.item

  const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)

  // modal trailer 
  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`)
    const videos = await tmdbApi.getVideos(category.movie, item.id)
    // console.log(videos)
    if(videos.results.length > 0){
      const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key
      // console.log(videoSrc)
      modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc)
    }else{
      modal.querySelector("modal__content").innerHTML = "Empty !"
    }
    modal.classList.toggle('active')
  }

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => history.push("/category/movie/" + item.id)}>
              Watch Now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch Trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );

}

const TrailerModal = props => {
  const item = props.item;

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute('src', '')

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}> 
        <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
      </ModalContent>
    </Modal>
  )
}


export default HeroSlide