import React, { Component} from "react";
import {Link, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import styles from "./Login.scss";
import axios from 'axios';
import backendConf from 'config/backend-server';

const cx = classNames.bind(styles);

class Login extends Component {

  state = {
    userId : null,
    password : null ,
    redirect: false
  }

  handleChnage = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleLogin = () => {
    
    const url = backendConf.domain + '/loginAction';
    const that = this;
    const {saveSessionUser} = this.props;
    const { userId , password } = this.state;
    const loginData = {
      userId ,
      password , 
    }

    let data = JSON.stringify(loginData);

    axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((response)=>response['data'])
    .then((jsonObj)=>{
        if(jsonObj["msg"] === "success"){

          saveSessionUser(jsonObj["user"]);
          that.setState({ redirect: true });
        } else{
          alert('No match data.');
        }
    });


  }

  render() {
    
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to = '/'/>;
    }

    return(
      <aside>
        <form className={cx('login-wrapper')} >
            <div className={cx('login-from')}>
              <div className={cx('login-from-section')}>
                <div className={cx('login-from-center')}>
                  <h2>Login</h2>
                  <div className={cx('form-group')}>
                    <label htmlFor="username">UserId</label>
                    <input type="text" className={cx('form-control')} name="userId" onChange={this.handleChnage}  ></input>
                  </div>
                  <div className={cx('form-group')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className={cx('form-control')} name="password" onChange={this.handleChnage} ></input>
                  </div><div className={cx('form-group')}>
                  <button type="button" className={cx('btn btn-primary')} onClick={this.handleLogin}>Login</button>
                  <Link className={cx('btn-link', 'btn')} to='/Register'>Register</Link>
                  </div>
                </div>
              </div>
            </div>
        </form >
      </aside>
    )
  }
}

export default Login;