import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../Home.jsx'
import {HomeBetween} from './Links/HomeBetween.jsx'
import {Explore} from './Links/Explore.jsx'
import {Notifications} from './Links/Notifications.jsx'
import {Messages} from './Links/Messages.jsx'
import {Bookmarks} from './Links/Bookmarks.jsx'
import {Lists} from './Links/Lists.jsx'
import {Profile} from './Links/Profile.jsx'
import {More} from './Links/More.jsx'

const Routo = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeBetween/>}/>
        <Route path='/Explore' element={<Explore/>}/>
        <Route path='/Notifications' element={<Notifications/>}/>
        <Route path='/Messages' element={<Messages/>}/>
        <Route path='/Bookmarks' element={<Bookmarks/>}/>
        <Route path='/Lists' element={<Lists/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/More' element={<More/>}/>
        <Route path='*' element={<Navigate to={<Home/>}/>}/>

      </Routes>
    </>
  )
}

export default Routo