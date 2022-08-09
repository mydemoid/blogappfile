import React from 'react'
// import {useEffect} from 'react'

function Login() {

  const [mail,setMail]=React.useState("")
  const [pw,setPw]=React.useState("")

function login(e){
  e.preventDefault()

  let check={mail,pw}
  console.log(check)

  fetch("http://localhost:8080/checklogin",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(check)
    
  }).then(() => {
    console.log("checking")

    // http://localhost:8080/

  })
  // fetch("http://localhost:8080/value")
  //     .then(res=>res.json())
  //     .then((result)=>{
  //       setUsers(result)
        
  //       console.log(result)
  //     })


}

  return (
    <div  style={{color:"white"}}>
        <div className='container p-2'>
      <div className='row'>
        <div className='col-md-4 m-2'>
   
        <form action="/action_page.php" className='bg-dark p-2' style={{borderRadius:"20px"}} autoComplete="off">
          
    <h3 style={{textAlign:"center",color:"#61dbfb",padding:"10px"}} >Fill Details</h3>

  <div className="mb-3 mt-3 m-4" >
    <label  className="form-label">Name:</label>
    <input type="text" className="form-control" id="n" placeholder="Enter email" name="email"  value={mail} onChange={(e) => setMail(e.target.value)} />
  </div>
  <div className="mb-3 mt-3 m-4" >
    <label  className="form-label">Password:</label>
    <input type="text" className="form-control" id="n" placeholder="Enter password" name="pw"  value={pw} onChange={(e) => setPw(e.target.value)}/>
  </div>
  
  <center><button type="submit" className="btn m-4" style={{backgroundColor:"#61dbfb"}} onClick={login}  ><b>Submit</b></button></center>

  <div className="m-5" >
    
  </div>
  {/* <div className="mb-3 mt-3 m-4" > */}
    {/* <label  className="form-label">adnum:</label> */}
    {/* <input type="hidden" className="form-control " id="a" placeholder="Enter address" name="adnum" value={adnum} onChange={(e) => setAdnum(e.target.value)} /> */}
  {/* </div>  */}
 
 </form>
</div> 
</div>
    </div>
    <p>{mail} </p>
    <p>{pw} </p>
    </div>
  )
}

export default Login
