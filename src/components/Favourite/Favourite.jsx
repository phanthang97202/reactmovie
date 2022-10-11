import React, { useEffect, useState } from 'react'

import PageHeader from '../page-header/PageHeader'
import { Link } from 'react-router-dom';
import './favourite.scss';

import Button from '../button/Button';

import { useContext } from 'react';
import { CartContext } from '../../App';


const Favourite = () => {
// 
//   const [cartItem, setCartItem] = useState([])
// 
//   console.log("cartItem", cartItem);

  const dataCartContext = useContext(CartContext);

  let listCarts = dataCartContext.stateFavourite;
  console.log("lists cart", listCarts); 

  // useEffect( () => {
  //   setCartItem(dataCartContext)
  // })
  
  // const handlerDeleteItem = () => {
  //   // console.log(index)
  //   listCarts.splice(0, 1);
  // }


  return (
    <div>
      <PageHeader />
      <div className="favourite__container">
        <div className="favourite__box">
          <h1 className="favourite">Favourite</h1>
          <button
            className="deleteCartAll"
            onClick={dataCartContext.handlerDeleteAllCart}
          >
            Delete All
          </button>
          {listCarts &&
            listCarts.map((listCart, index) => (
              <div key={index} className="favourite__box__item">
                <div className="favourite__box__item__img">
                  <img
                    // src="https://www.cgv.vn/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/s/n/snwh_poster_bluemontage_4x5fb_1_.jpg"
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      listCart.poster_path
                    }
                    alt=""
                  />
                </div>
                <div className="favourite__box__item__desc">
                  <h2>
                    {listCart.title || listCart.original_name || "Lỗi tên phim"}
                  </h2>
                  <p>{listCart.overview}</p>
                  <div className="favourite__box__item__author">
                    <i className="bx bxs-user">
                      <span>{listCart.popularity} views</span>
                    </i>
                  </div>
                  <div className="favourite__box__item__date">
                    <i className="bx bxs-time">
                      <span>
                        {listCart.release_date || listCart.first_air_date}
                      </span>
                    </i>
                  </div>
                  <Link
                    to={"/category/" + listCart.category + "/" + listCart.id}
                  >
                    <button>Continue Watch</button>
                  </Link>
                  <button
                    onClick={() => {
                      dataCartContext.handlerDeleteItem(index)
                    }}
                    style={{ backgroundColor: "#2e2828" }}
                  >
                    &#8212;
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Favourite
