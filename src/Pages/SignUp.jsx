import React from 'react'
import { Link, useParams } from 'react-router-dom'
import logoSignIn from '../assets/img/twitter-logo.svg'

const SignUp = () => {
  return (
    <div className='container'>
      <div className="signup">
        <Link to={'/signup'}><img className='link-logo' src={logoSignIn} alt='logo' /></Link>
        <div className='sss'>
          <h2 className='sign-title'>Create an account</h2>
          <Link to={'/login'}>Login</Link>
        </div>
        <form>
          <input placeholder='Name' className='signInp' type={"text"} />
          <input placeholder='Phone number' className='signInp' type={"number"} />

          <h3 style={{ fontSize: "30px", margin: "0" }} className='mini-title'>Date of birth</h3>
          <p className='mini-text'>
            Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
          </p>

          <div className='select-div'>
            <select className='select1'>
              <option selected hidden>Month</option>
            </select>
            <select className='select'>
              <option selected hidden>Day</option>
            </select>
            <select className='select'>
              <option selected hidden>Year</option>
            </select>
          </div>

          <button type='submit' className='login-btn2'>Next</button>

        </form>
      </div>
    </div>
  )
}

export default SignUp