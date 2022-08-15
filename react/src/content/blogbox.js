import React from 'react'
import {useNavigate } from 'react-router-dom'
import data from '../data'

function Blogbox(props) {

  let nav=useNavigate()

  let list=props.list
  let index=props.index
console.log(props.list.creator)
  const [likes,setLikes]=React.useState(false)
  const [sty,setSty]=React.useState("grey")

  function like(){
      if(likes===false){setLikes(true)}
      else{setLikes(false)}
      let s= likes ===true ? 'grey' : 'rgb(36, 244, 91)';
      setSty(s)
        console.log("clicked")
  
    }

    function read(){
      data.blog.heading=list.heading
      data.blog.content=list.content
      data.blog.time=list.time
      nav("/read")

    }

  return (
    
            
      


   
<div class="container" key={index}>
<div class="row">

<div class="col"  style={{padding: "10px",justifyContent: "center",margin: "10px"}}>

    <div class="container" style={{width:"90%",backgroundColor:"#1F2937",padding: "30px",borderRadius: "20px"}}>
    
           <div class="row">
        <div class="col">
            <p style={{color: "grey",fontSize: "15px"}}><b style={{color: "white",fontSize: "20px",}}>" </b>{props.list.creator}</p>
       
        </div>
        <div class="col">
            <p style={{color: "grey",fontSize: "15px",textAlign: "right",paddingRight: "30px",}}>{props.list.time}</p>
        </div>
            
      </div>
       <h3 style={{color: "white",padding: "px",fontSize: "20px"}}><b>{props.list.heading}</b></h3>
       <p style={{color: "white",padding: "px"}}>{props.list.readme}</p>

           <div class="row">
        <div class="col">
            <button style={{backgroundColor:"#1F2937",color:"blue",border:"0px solid #1F2937"}}onClick={read}>Learn More&gt;&gt;</button>
        </div>
        <div class="col" align="right">
            <button style={{color: sty,fontSize: "20px",paddingRight: "30px",backgroundColor:"#1F2937",border:"0px solid #1F2937"}} onClick={like}><b>&hearts;</b>like</button>
        </div>
           
    </div>

    </div> </div> </div>
    
   
    </div>

    
  )
}

export default Blogbox
