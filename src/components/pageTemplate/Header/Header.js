import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import styles from './Header.scss';
import classNames from 'classnames';
import Navigation from './Navigation';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

export default class Header extends Component {

  render() {

    const { handleLeftMenuToggle, sUser } = this.props;

    return (
      <div className={cx('header') }  >
          <Link to="/" className={cx('logo')}>My Project</Link>
          <Navigation handleLeftMenuToggle={handleLeftMenuToggle}></Navigation>
      </div>
    )
  }
}



