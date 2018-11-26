import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Route, Switch} from "react-router-dom";
import Header from './components/pageTemplate/Header';
import LeftMenu from './components/pageTemplate/LeftMenu';
import routes from './routes';
import classNames from 'classnames';
import resetStyle from './styles/reset.scss';
import mainStyle from './styles/root.scss';
import { Route, Switch} from "react-router-dom";

const cx = classNames.bind({mainStyle,resetStyle});

class App extends Component {

  state = {
    isLeftMenuOpend : true,
  }

  handleLeftMenuToggle () {
    this.setState( (state, props) => ({isLeftMenuOpend : !state.isLeftMenuOpend}) );
  }

  render() {

    const {isLeftMenuOpend} = this.state;
    const handleLeftMenuToggle = this.handleLeftMenuToggle;

    return (
        <Fragment>
          <Header handleLeftMenuToggle={handleLeftMenuToggle.bind(this)}></Header>
          <aside className={cx('wrapper')}>
            <LeftMenu isLeftMenuOpend = {isLeftMenuOpend}></LeftMenu>
            <aside className={cx('contents-wrapper', isLeftMenuOpend ? 'active' : '')}>
              <section className={cx('contents')}>
                <Switch>
                  {
                      routes.map((route)=><Route key={route.id} exact={route.exact} path={route.path} component={route.component}/>)
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
