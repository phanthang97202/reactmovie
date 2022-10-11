import './App.scss';

import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css'

import {BrowserRouter, Route} from 'react-router-dom'

import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
// import Login from './components/login/Login';

import Routes from './config/Routes';

// import axiosClient from './api/axiosClient';
// import axios from 'axios';

import {createContext, useState} from "react"

export const CartContext = createContext();
console.log("CartContext", CartContext);

function App() {
  // console.log(axios);
  // console.log(axiosClient);

  const [stateFavourite, setStateFavourite] = useState( JSON.parse(localStorage.getItem('favourite')) || []);
  const handlerDeleteAllCart = () => {
    setStateFavourite([])
    localStorage.removeItem('favourite');
  };

  const handlerDeleteItem = (index) => {
    let newCartCopyDelete = [...stateFavourite] 
    console.log("newCartCopyDelete", newCartCopyDelete);
    newCartCopyDelete.splice(index, 1); 
    console.log(newCartCopyDelete);
    // let deleteCartItem = localStorage.setItem("favourite", JSON.stringify(stateFavourite));
    localStorage.setItem("favourite", JSON.stringify(newCartCopyDelete));
    setStateFavourite(newCartCopyDelete);
    // return deleteItemCart;
    return newCartCopyDelete;
  };
  
  return (
    <CartContext.Provider
      value={{
        stateFavourite,
        setStateFavourite,
        handlerDeleteAllCart,
        handlerDeleteItem,
      }}
    >
      <BrowserRouter>
        {/* <Route
        render={(props) => (
        )}
        /> */}
        <>
          <Header />
          {/* <Header {...props} /> */}
          <Routes />
          <Footer />
        </>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
