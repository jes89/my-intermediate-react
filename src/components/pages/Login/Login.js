import React, { Component} from "react";
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import styles from "./Login.scss";
import axios from 'axios';


const cx = classNames.bind(styles);

class Login extends Component {

  state = {
    userId : '',
    password : '' ,
  }

  handleChnage = (e) => {
    console.log.bind(e.target.value);
  }

  handleSubmit = (e) => {
    alert('Your favorite flavor is: ' + this.state.value);
    e.preventDefault();
  }

  handleLogin = () => {
    axios.post('/loginAction', {
      userId: 'jes',
      password: 'jes89'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {

      return(
        <form className={cx('login-wrapper')} >
            <div className={cx('login-from')}>
              <div className={cx('login-from-section')}>
                <div className={cx('login-from-center')}>
                  <h2>Login</h2>
                  <div className={cx('form-group')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className={cx('form-control')} onChange={this.handleChnage} name="username" ></input>
                  </div>
                  <div className={cx('form-group')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className={cx('form-control')} name="password"></input>
                  </div><div className={cx('form-group')}>
                  <button type="button" className={cx('btn btn-primary')} onClick={this.handleLogin}>Login</button>
                  <Link className={cx('btn-link', 'btn')} to='/Register'>Register</Link>
                  </div>
                </div>
              </div>
            </div>
        </form >
      )
  }
}

export default Login;