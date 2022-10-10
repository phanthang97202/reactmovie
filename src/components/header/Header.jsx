import React, { useState, useEffect } from 'react'
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

// import Modal, {ModalContent} from '../modal/Modal';

import logo from '../../assets/logo_web.png';

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/category/movie",
  },
  {
    display: "TV Series",
    path: "/category/tv",
  },
  {
    display: "Favourite",
    path: "/favourite",
  },
  {
    display: "Login",
    path: "/login",
  },
];

const Header = () => {
    const {pathname} = useLocation(); // lấy địa chỉ đường dẫn hiện tại => path
    // console.log(pathname);

    const headerRef = useRef(null)

    const active = headerNav.findIndex(value => value.path === pathname);
    // console.log(active)
    // const [active, setActive] = useState("/");
    // const hanldeActive = () => {
    //   setActive(active);
    // }

    useEffect( () => {
      const shrinkHeader = () => {
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){

          // console.log(headerRef.current)

          headerRef.current.classList.add('shrink')
        }else{
          headerRef.current.classList.remove("shrink");
        }
      }

      window.addEventListener('scroll', shrinkHeader);

      return () => {
        window.removeEventListener("scroll", shrinkHeader);
      }
    }, [])

    return (
      <div ref={headerRef} className="header">
        <div className="header__wrap container">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">Movie</Link>

            {/* <Link style={{paddingLeft: 40}} to="/signup" > Sign Up</Link> */}
          </div>

          <ul className="header__nav">
            {headerNav.map((value, index) => (
              <li key={index} className={`${index === active ? "active" : ""}`}>
                <Link style={{ textDecoration: 0 }} to={value.path}>
                  {value.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Header