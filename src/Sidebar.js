import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar-hashTag">#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://media.istockphoto.com/photos/dark-background-texture-1006-picture-id823541950?b=1&k=20&m=823541950&s=170667a&w=0&h=SsdljIeT3D-geibOmugtU4S_zDA0Fk9M6nY-m3NQ5M4=" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Santino Majur</h2>
            <h4>Full Stack Web Developer</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,334</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2,334</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('design')}
            {recentItem('softwareengineering')}
            {recentItem('connections')}
        </div>
    </div>
  )
}

export default Sidebar