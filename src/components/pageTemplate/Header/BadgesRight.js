import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import headerStyles from './Header.scss';
import classNames from 'classnames';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const cx = classNames.bind(headerStyles);

const mailOptions = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
  ];

const notifiOptions = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
  ];
  
  const ITEM_HEIGHT = 30;

  export default class BadgesRight extends Component{
    
    state = {
        invisible: false,
        mailCnt : 8,
        notifiCnt : 13,
        isMenuOpen : false,
        profileAnchorEl: null,
        mailAnchorEl : null ,
        notifiAnchorEl : null,
        mailOpened : false,
    };

    handleBadgeVisibility = () => {
        this.setState(prevState => ({ invisible: !prevState.invisible }));
    };

    handleClick = (event,key) => {
        this.setState({ [key] : event.currentTarget });
    };
    handleClose = () => {
        this.setState({ profileAnchorEl : null });
        this.setState({ mailAnchorEl : null });
        this.setState({ notifiAnchorEl : null });
    };

    render() {

        const { invisible, mailCnt, notifiCnt, profileAnchorEl, mailAnchorEl, notifiAnchorEl } = this.state;

        return (
            <div className={cx('badges-right')}>
                <div >
                    <Switch color="primary" checked={!invisible} onChange={this.handleBadgeVisibility}  />
                    <IconButton color="inherit" onClick={(event) => {this.handleClick(event,'mailAnchorEl')}} >
                        <Badge badgeContent={mailCnt} color="secondary" invisible={invisible}  >
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={mailAnchorEl}
                        open={Boolean(mailAnchorEl)}
                        onClose={this.handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 10,
                                width: 300,
                            },
                        }}
                    >
                        {mailOptions.map(option => (
                            <MenuItem key={option} onClick={this.handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                    <IconButton color="inherit" onClick={(event) => {this.handleClick(event,'notifiAnchorEl')}} >
                        <Badge badgeContent={notifiCnt} color="secondary" invisible={invisible} >
                            <NotificationsIcon />
                        </Badge>
                    </IconButton> 

                    <Menu
                        id="long-menu"
                        anchorEl={notifiAnchorEl}
                        open={Boolean(notifiAnchorEl)}
                        onClose={this.handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 10,
                                width: 300,
                            },
                        }}
                    >
                        {notifiOptions.map(option => (
                            <MenuItem key={option} onClick={this.handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>

                    <IconButton aria-haspopup="true" onClick={(event) => {this.handleClick(event,'profileAnchorEl')}} color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <Menu anchorEl={profileAnchorEl} open={Boolean(profileAnchorEl)}  onClose={this.handleClose}>
                        <Link to="/"></Link>
                        <Link to="/Profile"><MenuItem onClick={this.handleClose}>Profile</MenuItem></Link>
                        <Link to="/My-Account"><MenuItem onClick={this.handleClose}>My account</MenuItem></Link>
                        <Link to="/Login"><MenuItem onClick={this.handleClose}>Login</MenuItem></Link>
                    </Menu>
        
                </div>
            </div>
      )
    }   
}
    