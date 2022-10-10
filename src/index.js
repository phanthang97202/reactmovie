import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import {createContext} from "react"
// import tmdbApi from "./api/tmdbApi";
// 
// export const CartContext = createContext();
// console.log("CartContext", CartContext);
// // 
// const data = [
//   1,2,3,4
// ]


ReactDOM.render(
  <React.StrictMode>
    {/* <CartContext.Provider value={item}> */}
      <App />
    {/* </CartContext.Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

