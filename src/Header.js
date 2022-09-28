import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

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
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging' />
            <HeaderOption Icon={NotificationsIcon} title='Notifications' />
            <HeaderOption avatar='https://media-exp1.licdn.com/dms/image/C4D03AQFIrtAl7AYDaA/profile-displayphoto-shrink_100_100/0/1655284694212?e=1669852800&v=beta&t=mLWWRmdzi-JdWbA5Gcp9o1V4kB9ZwAI5eXYe0XxsbKY' title='Me' />
        </div>
    </div>
  )
}

export default Header