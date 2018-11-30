import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Route, Switch} from "react-router-dom";
import Header from './components/pageTemplate/Header';
import LeftMenu from './components/pageTemplate/LeftMenu';
import routes from './routes';
import classNames from 'classnames';
import resetStyle from './styles/reset.scss';
import mainStyle from './styles/root.scss';
import { Route, Switch} from "react-router-dom";
import axios from 'axios';
import backendConf from 'config/backend-server';


const cx = classNames.bind({mainStyle,resetStyle});

class App extends Component {

  state = {
    isLeftMenuOpend : true,
    sUser : null
  }

  handleLeftMenuToggle () {
    this.setState( (state, props) => ({isLeftMenuOpend : !state.isLeftMenuOpend}) );
  }

  saveSessionUser(sUser) {
    this.setState( (state, props) => ({sUser : sUser}) );
  }

  deleteSessionUser() {
    this.setState( (state, props) => ({sUser : null}) );
  }

  getSessionUser() {
    const url = backendConf.domain + '/getSessionUser';
    const that = this;

    if(this.state.sUser == null){
      axios.post(url, null, {
        headers: {
            'Content-Type': 'application/json',
        }
      })
      .then((response)=>response['data'])
      .then((jsonObj)=>{
          let sUser = jsonObj["sUser"];

          if(sUser == null){
            sUser = "noLogin";
          }
          that.setState({sUser : sUser});
      });
    }
   
  }

  render() {

    const { isLeftMenuOpend, sUser } = this.state;
    const {handleLeftMenuToggle, saveSessionUser, deleteSessionUser} = this;
    
    this.getSessionUser();
    
    return (
 
        <Fragment>
          <Header handleLeftMenuToggle={handleLeftMenuToggle.bind(this)} deleteSessionUser={deleteSessionUser.bind(this)} ></Header>
          <aside className={cx('wrapper')}>
            <LeftMenu isLeftMenuOpend = {isLeftMenuOpend} sUser={sUser} ></LeftMenu>
            <aside className={cx('contents-wrapper', isLeftMenuOpend ? 'active' : '')}>
              <section className={cx('contents')}>
                <Switch>
                  {
                      routes.map((route)=><Route key={route.id} exact={route.exact} path={route.path} 
                      render={()=><route.component sUser={sUser} saveSessionUser={saveSessionUser.bind(this)} />}/>)
                  }
                </Switch>
              </section>
            </aside>
          </aside>
        </Fragment>
    );
  }
}

export default App;
