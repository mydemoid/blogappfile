import React from 'react'
import  { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
// import {useEffect} from 'react'
// import Profile from '../profile'
import data from '../data'
function Login() {
   
        const nav=useNavigate()
         const [mail,setMail]=React.useState("")
         const [pw,setPw]=React.useState("")
       
       let c
         function login (e){
         e.preventDefault()
       
         let check={mail,pw}
         console.log(check)
       
        
             fetch("http://localhost:8080/checklogin",{
             method:"POST",
             headers:{"Content-Type":"application/json"},
             body:JSON.stringify(check)
             
           }).then(res=>res.json())
           .then((result)=>{
             // c=result
             console.log(result)
       
            if(result!=null)
            {
             console.log("is here");
             data.id=result.id
             data.name=result.name
             data.email=result.email
             data.dob=result.dob
             data.pw=result.pw
             nav("/show")
           }
             if(result===null){console.log("is not here");}
          
            
                })
               
             //  console.log( c)
           
                
         }
       
        
       
  return (
    <div className='container'>
    <div className='forms'>
    {/* className='bg-dark p-2' */}
    <form action="/action_page.php"  style={{borderRadius:"20px",width:"400px",backgroundColor:"#1F2937"}} autoComplete="off">
          
          <h3 style={{textAlign:"center",color:"#61dbfb",padding:"10px"}} >Fill Details</h3>
      
        <div className="mb-3 mt-3 m-4" >
          <label  className="form-label">Email:</label>
          <input type="text" className="form-control" id="n" placeholder="Enter email" name="email"  value={mail} onChange={(e) => setMail(e.target.value)} />
        </div>
        <div className="mb-3 mt-3 m-4" >
          <label  className="form-label">Password:</label>
          <input type="text" className="form-control" id="n" placeholder="Enter password" name="pw"  value={pw} onChange={(e) => setPw(e.target.value)}/>
        </div>
        
        <center><button type="submit" className="btn m-4" style={{backgroundColor:"#61dbfb"}} onClick={login}  ><b>Submit</b></button></center>
      <center><p style={{color:"white"}}>don't have an account?..<a href='/signin' style={{color:"#61dafb"}}> signin</a></p></center>

        <div className="m-5" >
          
        </div>
        {/* <div className="mb-3 mt-3 m-4" > */}
          {/* <label  className="form-label">adnum:</label> */}
          {/* <input type="hidden" className="form-control " id="a" placeholder="Enter address" name="adnum" value={adnum} onChange={(e) => setAdnum(e.target.value)} /> */}
        {/* </div>  */}
       
       </form>

    </div>
    </div>
  )
}

export default Login
