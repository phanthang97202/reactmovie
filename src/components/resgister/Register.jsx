import React from 'react'

import bg from "../../assets/footer-bg.jpg";

import PageHeader from '../page-header/PageHeader';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <PageHeader>Register</PageHeader>
      <div style={{ backgroundImage: `url(${bg})` }} className="login">
        {/* <div className="login"> */}
        <div className="login__container">
          <div className="login__container__box">
            <h1>Đăng ký</h1>
            <form action="/">
              <input
                required
                type="text"
                placeholder="Email hoặc số điện thoại đăng ký"
              />
              <hr />
              <input required type="text" placeholder="Mật khẩu tài khoản" />
              <hr />
              <input
                required
                type="text"
                placeholder="Nhập lại mật khẩu tài khoản"
              />
              <hr />
              {/* <label style={{textAlign: 'left'}} htmlFor="dateAccount">
                <small>Nhập ngày sinh</small>
              </label> */}

              <input
                id="dateAccount"
                required
                type="date"
                placeholder="Nhập ngày sinh"
              />
              <hr />
              <button>Đăng ký tài khoản</button>
            </form>
            <div className="login__container__box__check">
              <div>
                <input type="checkbox" />
                <small>Đồng ý các điều khoản của chúng tôi</small>
              </div>
              <a href="">Bạn cần trợ giúp?</a>
            </div>
            <p className="login__container__box__question">
              Bạn đã có tài khoản JAV ?
              <span>
                <Link to="/login"> Đăng nhập ngay</Link>
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
}

export default Register