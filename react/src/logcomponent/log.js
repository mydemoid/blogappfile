import React from 'react'
import Login from './login'
import Signin from './signin'

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  

function Log() {
  return (
    <Router>
      <div>
    <div className='page'>
    
      <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container" style={{displat:"flux",justifyContent:"center"}}>
  <Link to="/login"><button className='switch m-2'><b>login</b></button></Link> 
      
           <Link to="/"><button className='switch m-2'><b>signin</b></button></Link>
   
  </div>
</nav>

    </div>
      <Routes>  
      {/* <Route exact path='/' element={< Home />}></Route>   */}
      <Route exact path='/login' element={<Login/> }></Route>  
      <Route exact path='/' element={<Signin/>}></Route>  
</Routes>  
</div>
</div>
</Router>
  )
}

export default Log
