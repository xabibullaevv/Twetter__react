import React from 'react'
import { Link } from 'react-router-dom'
// import Funny from './img/funny.svg'

function HomeBetween() {
  return (
    <div className='container'>
      <div className='bettwenHomeHeader1'>
        <div className='bettwenHomeHeader'>
          <h2 style={{
            margin: "0",
            fontFamily: 'sans-serif',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "32px",
            color: "black"
          }}>
            Home
          </h2>

          <button>
            <img src={"Funny"} alt='funny' />
          </button>
        </div>

        <div className='userDiv'>
          <div>
            <div style={{
              display:"flex"
            }}>
              <img src='' alt='img'/>
  
                <input className='sideInp' placeholder={"What’s happening"} type={'text'}/>
            </div>

            <div>

              <ul style={{
                marginTop:"35px",
                display:"flex",
                alignItems:"center",
                gap:"10px"
              }}>
                <li><Link><img src='	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQA…LfKiCEJdwDPjTEMlPXaPeN2Ct72LcmJPMAAAAAElFTkSuQmCC' alt=''/></Link></li>
                <li><Link><img src='	https://tweeter-clone-two.vercel.app/static/media/gif.f68662e5652fac46ebe245e358fb7a7a.svg' alt=''/></Link></li>
                <li><Link><img src='https://tweeter-clone-two.vercel.app/static/media/text-setings.f54175d4155e5c8a00057cca563c9840.svg' alt=''/></Link></li>
                <li><Link><img src='	https://tweeter-clone-two.vercel.app/static/media/stiker.f95083551cce2ea6723d2c0dbaec350e.svg' alt=''/></Link></li>
                <li><Link><img src='https://tweeter-clone-two.vercel.app/static/media/schedule.5acf2c1cbb8d2a5477616abbb3dbb87a.svg' alt=''/></Link></li>
              </ul>
            </div>
          </div>
          <button className='buttonSide'>
            Tweet
          </button>

        </div>

        <div>
              <div style={{
                display:"flex"
               }}>
               
                <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwA…G03yF0c0jbI/mP0Qjtx5/B/rnRnoMpy91AAAAAElFTkSuQmCC'} alt=''/>
              </div>
            </div>
            

      </div>
    </div>
  )
}

export default HomeBetween