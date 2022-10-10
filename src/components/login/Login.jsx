import React from "react";

import PageHeader from "../page-header/PageHeader";
import bglogin from "../../assets/bg_login.jpg";
import bg from "../../assets/footer-bg.jpg";

import { Link } from "react-router-dom";
import Register from "../resgister/Register";

// import './login.scss';
import "./login.scss";


const Login = () => {
  return (
    <>
      <PageHeader>Login</PageHeader>
      <div style={{ backgroundImage: `url(${bg})` }} className="login">
        {/* <div className="login"> */}
        <div className="login__container">
          <div className="login__container__box">
            <h1>Đăng nhập</h1>
            <form action="/">
              <input
                required
                type="text"
                placeholder="Email hoặc số điện thoại"
              />
              <hr />
              <input required type="text" placeholder="Mật khẩu" />
              <hr />
              <button>Đăng nhập</button>
            </form>
            <div className="login__container__box__check">
              <div>
                <input type="checkbox" />
                <small>Ghi nhớ tôi</small>
              </div>
              <a href="">Bạn cần trợ giúp?</a>
            </div>
            <p className="login__container__box__question">
              Bạn mới tham gia JAV?
              <span>
                <Link to="/register">Đăng kí ngay</Link>
              </span>
            </p>
            <p className="login__container__box__capcha">
              Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải
              là robot.
              <span>
                <a href=""> Tìm hiểu thêm</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;


