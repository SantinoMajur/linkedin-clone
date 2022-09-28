import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://img.icons8.com/color/452/linkedin.png" alt="" />
            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder='Search' />
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={WorkIcon} title='Jobs' />
            <HeaderOption Icon={MessageIcon} title='Messaging' />
            <HeaderOption Icon={NotificationsNoneIcon} title='Notifications' />
        </div>
    </div>
  )
}

export default Header