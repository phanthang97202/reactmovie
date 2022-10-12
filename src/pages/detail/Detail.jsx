import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import './detail.scss'
import tmdbApi from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'

import CastList from './CastList'
import VideoList from './VideoList'

import Button, { OutlineButton } from '../../components/button/Button'
import Reviews from './Reviews'

// phần context cart 
// import {createContext} from "react"
// 
// export const CartContext = createContext();
// console.log("CartContext", CartContext);

import { useContext } from 'react'
import { CartContext } from '../../App'


const Detail = () => {
  const {category, id} = useParams();
  const [item, setItem] = useState(null)

  useEffect( ()  => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, {params: {}})
      setItem(response)
      window.scrollTo(0,0)
    }
    getDetail()
  }, [category, id])

  const getDataFavourite = useContext(CartContext);
  console.log("getDataFavourite", getDataFavourite);

  const handlerCart = () => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      console.log("response", response);
      
      const checkCart = getDataFavourite.stateFavourite.some( (value) => value.id === response.id)
      // console.log("checkCart", checkCart);
      !checkCart ? 
        getDataFavourite.setStateFavourite((prev) => {
          const storageFavourite = [...prev, { ...response, category }];
          const jsonFavourite = JSON.stringify(storageFavourite);
          localStorage.setItem("favourite", jsonFavourite);
          console.log("storageFavourite", storageFavourite);

          return storageFavourite;
        }) 
      : console.log('trùng');

      // console.log(getDataFavourite.stateFavourite);
      // // getDataFavourite.stateFavourite && getDataFavourite.stateFavourite.forEach(
      // getDataFavourite.stateFavourite.forEach(
      //   (item, index) => {
      //     console.log(item.id);
      //     console.log("response.id", getDataFavourite.stateFavourite.id);
      //     // const storageFavourite = [...prev, { ...response, category }];
      //     // const jsonFavourite = JSON.stringify(storageFavourite);
      //     // localStorage.setItem("favourite", jsonFavourite);
      //     // console.log("storageFavourite", storageFavourite);
      //     // return storageFavourite;
      //     getDataFavourite.setStateFavourite((prev) => {
      //       const storageFavourite = [...prev, { ...response, category }];
      //       const jsonFavourite = JSON.stringify(storageFavourite);
      //       localStorage.setItem("favourite", jsonFavourite);
      //       console.log("storageFavourite", storageFavourite);
      //       return storageFavourite;
      //     });
      //     if (item.id === getDataFavourite.stateFavourite.id) {
      //       console.log("trùng phim trong giỏ hàng");
      //       return;
      //     } 
      //     
      //   }
      // )

//       getDataFavourite.setStateFavourite((prev) => {
//         const storageFavourite = [...prev, { ...response, category }];
//         const jsonFavourite = JSON.stringify(storageFavourite);
//         localStorage.setItem("favourite", jsonFavourite);
//         console.log("storageFavourite", storageFavourite);
//         return storageFavourite;
//       });
    };

    // storageFavourite.include(response.id) ? getDetail() : console.log('trùng')  
    getDetail();

    window.alert("Đã thêm phim vào mục yêu thích của bạn ! ^^");

    console.log('get Item cart', item) 
  };

  return (
    // <CartContext.Provider value={item}>
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              >
                <button 
                  onClick={handlerCart} 
                  className="button__favourite">
                  <i class="bx bxs-heart-circle"></i>
                </button>
              </div>
            </div>

            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span className="genres__item" key={i}>
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>

              <div className="cast">
                <div className="section__header">
                  <h2>
                    Casts
                    
                  </h2>
                </div>

                <CastList id={item.id} />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="section mb-3">
              <VideoList id={item.id} />
            </div>
          </div>
          <div>
            <Reviews id={item.id} />
          </div>
        </>
      )}
    </>
    // </CartContext.Provider>
  );
}

export default Detail
