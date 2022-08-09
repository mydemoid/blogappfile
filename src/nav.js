import React from 'react'
import logo from './images/icon.png'
import './logcomponent/log.css'
function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container" style={{displat:"flux",justifyContent:"center"}}>
  
      <img src={logo} alt="Logo" style={{width:"40px"}} className="rounded-pill"/> 
            <span style={{paddingLeft:"30px",color:"#61dbfb"}}><b>write here</b></span>
           
           
   
  </div>
</nav>

    </div>
  )
}

export default Nav
