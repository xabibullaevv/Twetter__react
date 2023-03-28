import { useContext, useState } from "react"
import { authContext } from "../context/AuthContextProvider"
import { Link } from "react-router-dom"
import logoTwitter from '../assets/img/twitter-logo.svg'



export const Login = () => {
  const { token, setToken } = useContext(authContext)
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  console.log(token);
  const submitHandler = (e) => {
    e.preventDefault()
    const postRequest = async () => {
      try {
        setToken("fsdfsdfdsf")
      } catch (err) {
        console.log(err);
      }

      
    }
    postRequest()
  }
    return (
      <>
        <div className="container">
          <div className="inner-div">
            <Link to={'/login'}><img src={logoTwitter} alt="This is twitter Logo" width={50} height={41}/></Link>
            <h2 className="twitter-title">Log in to Twitter</h2>
            <form onSubmit={(e) => submitHandler(e)} className="form">
              <input required value={form.email} onChange={(e) => setForm({
                ...form.email,
                email:e.target.value
              })} className="input-login" aria-label="Default" type={"email"} placeholder="Phone number, email address"/>            
              <input required value={form.password} onChange={(e) => setForm({
                ...form,
                password:e.target.value
              })} className="input-login" aria-label="Default" type={"password"} placeholder="Password"/>    
              <button type="submit" className="login-btn">Log in</button>                  
            </form>

            <div>   
              <Link to={'/signup'} className="login-link">Sign up to Twitter</Link>              
            </div>
          </div>
        </div>
      </>
      // <>
      //   <form onSubmit={(e) => submitHandler(e)}>
      //     <div>
      //       <label>
      //         <input value={form.email} onChange={(e) => setForm({
      //           ...form.email,
      //           email: e.target.value
      //         })} />

      //         <input value={form.password} onChange={(e) => setForm({
      //           ...form,
      //           password: e.target.value
      //         })} />
      //       </label>

      //       <div>
      //         <p>
              
      //           <Link to={'/signup'}>Register</Link>
      //         </p>
      //       </div>
      //       <button type="submit">Submit</button>
      //     </div>
      //   </form>
      // </>
    )

  
}