import React from 'react'
import { Link } from 'react-router-dom'
// import Log from '/najot talim/react/homework/homework-9/src/assets/img/twitter-logo.svg'
import ImgHome from './img/home.svg'
import ImgExplore from './img/explore.svg'
import ImgNotifications from './img/notifications.svg'
import ImgMessages from './img/Messages.svg'
import ImgBookmarks from './img/bookmark.svg'
import ImgLists from './img/lists.svg'
import ImgProfile from './img/profile.svg'
import ImgMore from './img/more.svg'
import Avater from './img/avatar.svg'
import hamb from './img/hamb.svg'

function SideBar() {
  return (
    <div>
      <Link className='LogoSide' to='/'><img src={"Log"} alt='Logo'/></Link>
      <ul className="listSide">
        <li className="item"><Link to={'/'}><img className='imgItem' src={ImgHome} alt=''/>Home</Link></li>
        <li className="item"><Link to={'/'}><img className='imgItem' src={ImgExplore} alt=''/>Explore</Link></li>
        <li className="item"><Link to={'/'}><img className='imgItem' src={ImgNotifications} alt=''/>Notifications</Link></li>
        <li className="item"><Link to={'/'}><img className='imgItem' src={ImgMessages} alt=''/>Messages</Link></li>
        <li className="item"><Link to={'/'}><img className='imgItem' src={ImgBookmarks} alt=''/>Bookmarks</Link></li>
        <li className="item"><Link to={'/'}><img className='imgItem' src={ImgLists} alt=''/>Lists</Link></li>
        <li className="item"><Link to={'/'}><img className='imgItem' src={ImgProfile} alt=''/>Profile</Link></li>
        <li className="item"><Link to={'/'}><img className='imgItem' src={ImgMore} alt=''/>More</Link></li>
      </ul> 

      <button className='SideButton'>Tweet</button>

      <Link style={
        {
          marginTop:"65px",
          textDecoration:"none",
          display:"flex",
          justifyContent:"space-between"
        }
      }>
        <img style={{marginRight:"15px", display:"inline-block"}} src={Avater} alt='avatar'/>
        <span style={{
          display:"inline-block", marginTop:"6px"
        }}>
          <span style={{
            fontFamily: 'sans-serif',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHight: "21px",
            color:"black",
            display:"block"
          }}>Bobur</span>
          <span style={{
            display:"block",
            color:"gray"
          }}>@bobur_mavlonov</span>``
        </span>
        <img style={{
          marginLeft:"10px"
        }} src={hamb} alt='hamb '/>
      </Link>
    </div>
  )
}

export default SideBar