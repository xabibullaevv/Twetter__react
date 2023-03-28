import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import HomeBetween from "./Components/Links/HomeBetween"
import SideBar from "./Components/SideBar"
import TheRight from "./Components/TheRight"
import '../App.css'

export const Home = () => {
  let [users, setUsers] = useState([])
  let [loader, setLoader] = useState(true) 

  useEffect(() => {
    setLoader(true)
    fetch('https://reqres.in/api/users?page=2')
      .then((res) => res.json())
      .then((data) =>  {
        setUsers(data.data)
        setLoader(false)
      })
      
  }, [])
  
  if (loader) {
    return (
      <h1>Loading...</h1>
    )
  }
  

  return (

    <div className="container">
      <div className="page">
        <SideBar/>
        <HomeBetween/>
        <TheRight/>
      </div>
    </div>
    // <ul>
    // {
    //   users.map((user, i) => ( 
    //     <li key={i}>
    //       <h3>{user.first_name} {user.last_name}</h3>
    //       <p>{user.email}</p>
    //       <Link to={'/profile/' + user.id}><img src={user.avatar} alt={user.last_name}/></Link>
    //     </li>
    //    ))
    // }
    // </ul>

  )
}