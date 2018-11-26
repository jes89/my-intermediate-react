import React, {Component} from 'react';
import BadgesRight from './BadgesRight';
import styles from './Header.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

export default class Navigation extends Component {

    render() {

      const {handleLeftMenuToggle} = this.props;

        return (
            <nav className={cx('navbar')} > 
              <span className={cx('navbar-btn')} onClick={handleLeftMenuToggle} >
                <span className={cx('icon-bar')}></span>
                <span className={cx('icon-bar')}></span>
                <span className={cx('icon-bar')}></span>
              </span>
              <BadgesRight></BadgesRight>
            </nav>
          );
    }

}