import React from 'react'
import Blogbox from './blogbox'
import add from './add.png'
import profile from './profile.png'
import data from '../data'
import {useNavigate } from 'react-router-dom'

function Show() {

  const [a,setA]=React.useState([data.id,data.name,data.email,data.dob,data.pw])
  const [b,setB]=React.useState([])
  
 
  const nav=useNavigate()
  function logout(){
      data.name=""
      data.id=""
      data.email=""
      data.dob=""
      data.pw=""
      setA([""])
  }

  function toadd(){
    nav("/addblog")
  }
  function toprofile(){
    nav("/profile")
  }

  React.useEffect(()=> {
    fetch("http://localhost:8080/bloglist")
    .then(res=>res.json())
    .then((result)=>{
     
    setB(result)
    console.log(result)
  })
},[])

const list= b.map((list,index)=>
    
  <Blogbox list={list} key={index} />
     
    )

  return (
    <>
    <div className='container-fluid p-3' style={{backgroundColor:"#1F2937"}}>
        <center><h5 style={{color:"#61dafb"}}>welcome name</h5></center>
    </div>

    <div className='container-fluid' style={{paddingLeft:"50px",paddingRight:"110px"}}>
        <div className='row'>
        
        {list}
        
        </div>
    </div>
   <div style={{width:"40px",position:"fixed",bottom:"40%",right:"70px"}}>
    <div className='row' align="center"></div>
    <button className='m-2' style={{backgroundColor:"#111827",padding:"10px",border:"0px solid #111827",borderRadius:"100px"}} ><img src={add} style={{width:"40px",backgroundColor:""}} onClick={toadd}/></button>
    <button className='m-2' style={{backgroundColor:"#111827",padding:"10px",border:"0px solid #111827",borderRadius:"100px"}}><img src={profile}  style={{width:"40px"}} onClick={toprofile} /></button>

</div>
    </>
  )
}

export default Show
