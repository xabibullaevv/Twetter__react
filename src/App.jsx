import { useContext } from 'react';
import './App.css';
import {Routes, Route, Navigate } from 'react-router-dom'
import { authContext } from './context/AuthContextProvider';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  const {token} = useContext(authContext)
  return (
    <div className="App">
      <Routes>
        {token ? (
          <>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Navigate to={'/'}/>}/>
          </>
        ) : (
          <>
            <Route path='/login' element={<h1><Login/></h1>}/>              
            <Route path='/signup' element={<h1><SignUp/></h1>}/>           
            <Route path='*' element={<Navigate to={"/login"}/>}/>   
          </>          
        )}
      </Routes>
    </div>
  );
}

export default App;
