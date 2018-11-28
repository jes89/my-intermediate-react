import React, {Component} from 'react';
import {Link, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import styles from "./Register.scss";

const cx = classNames.bind(styles);

class Register extends Component {

    state = {
        userId : '' ,
        password : '' ,
        userNm: '' ,
        isDuplicationID : false

    }
    
    handleChnage = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleDuplicationId = (e) => {
        const userId = e.target.value;

        if(userId.length === 0){
            return;
        }

        const url = '';
        const that = this;

        fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId})
          }).then(function(response) {
            return response.json();
          }).then(function(jsonObj) {   
            if(jsonObj["msg"] === "exist"){
                that.setState({ isDuplicationID: true });
            } else{
                that.setState({ isDuplicationID: false });
            }
        });

    }

    handleRegister = () => { 

        const url = 'http://localhost:3001/registerAction';
        const that = this;
        const userData = this.state;

        if(userData.userId === ''){
            this.userIdInput.focus();
            return;
        } else if(userData.password === ''){
            this.passwordInput.focus();
            return;
        } else if(userData.userNm === ''){
            this.userNmInput.focus();
            return;
        }

        if(this.state.isDuplicationID){
            alert('you can not use this ID because of the duplication.  ');
            return;
        }

        fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
          }).then(function(response) {
            return response.json();
          }).then(function(jsonObj) {
            if(jsonObj["msg"] === "success"){
              that.setState({ redirect: true });
            } else{
              alert('server error.');
            }
        });
    }


    render() {

        const { redirect, isDuplicationID } = this.state;

        if (redirect) {
            return <Redirect to = '/'/>;
        }

        return (
            <aside>
                <form className={cx('register-wrapper')} >
                    <div className={cx('register-from')}>
                        <div className={cx('register-from-section')}>
                            <div className={cx('register-from-center')}>
                                <h2>Register</h2>
                                <div className={cx('form-group')}>
                                    <label htmlFor="userId">UserId</label>
                                    <input type="text"  ref={(input) => { this.userIdInput = input; }}  className={cx('form-control')} name="userId" onChange={this.handleChnage} onBlur={this.handleDuplicationId} ></input>
                                    <span className={cx('exists-user')}>{isDuplicationID ? 'you can not use this ID because of the duplication.' : ''}</span>
                                    
                                </div>
                                <div className={cx('form-group')}>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" ref={(input) => { this.passwordInput = input; }} className={cx('form-control')} name="password" onChange={this.handleChnage} ></input>
                                </div>
                                <div className={cx('form-group')}>
                                    <label htmlFor="userNm">User name</label>
                                    <input type="text" ref={(input) => { this.userNmInput = input; }} className={cx('form-control')} name="userNm" onChange={this.handleChnage}></input>
                                </div>
                                <div className={cx('form-group')}>
                                    <button type="button" className={cx('btn btn-primary')} onClick={this.handleRegister}>Register</button>
                                    <Link className={cx('btn-link', 'btn')} to='/Login'>Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form >
            </aside>
        )
    }
}



export default Register;