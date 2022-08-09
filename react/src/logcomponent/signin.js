import React from 'react'
import {useEffect} from 'react'
function Signin() {

    const [name,setName]=React.useState("")
    const [email,setEmail]=React.useState("")
    const [adnum,setAdnum]=React.useState("")
    const [dob,setDob]=React.useState("")
    const [pw,setPw]=React.useState("")
    
  const[val,setVal]=React.useState("")
  const[pass,setPass]=React.useState("")
  
    const [users,setUsers]=React.useState()
  
    
    function handleclick(e){
      e.preventDefault()
      
    //  setKey(key+1)
      console.log(adnum)
      setUsers(users+1)
      setAdnum(()=> `UN-${(((users+1)+1000)+"").substring(1)}` )
      let id=adnum
      const user={id,name,email,adnum,dob,pw}
      console.log(user) 
    

  //code connecting to springboot
  
      fetch("http://localhost:8080/create",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
      }).then(() => {
        console.log("added")
  
        // http://localhost:8080/
  
      })
  

    
      setName("")
      setDob("")
      setEmail("")
      setPw("")
  
    }
  
    useEffect(()=> {
      fetch("http://localhost:8080/list")
      .then(res=>res.json())
      .then((result)=>{
        setUsers(result)
        setAdnum(()=> `UN-${(((users+1)+1000)+"").substring(1)}` )
        console.log(users)
      })
    },[users])

//////////////////////////////////////////////////////////////
//email validation
    function ValidateEmail(inputText)
    {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailformat))
    {
    setVal("Valid email address!");
    document.form1.text1.focus();
    return true;
    }
    else
   {
    setVal("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
    }
    }
    /////////////////////////////////////////////
    //password validation







    ///////////////////////////////////////
  return (
    <div style={{color:"white"}}>
        <div className='container p-2'>
      <div className='row'>
        <div className='col-md-4 m-2'>
   
        <form action="/action_page.php" className='bg-dark p-2' style={{borderRadius:"20px"}} autoComplete="off">
          
    <h3 style={{textAlign:"center",color:"#61dbfb",padding:"10px"}} >Fill Details</h3>

  <div className="mb-3 mt-3 m-4" >
    <label  className="form-label">Name:</label>
    <input type="text" className="form-control" id="n" placeholder="Enter name" name="name" value={name} onChange={(e) => setName(e.target.value.replace(/[^a-z]/gi, ''))} />
  </div>

  <div className="mb-3 mt-3 m-4" >
    <label  className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="name" value={email} onChange={(e) =>{ setEmail(e.target.value);ValidateEmail();}} />
    <p style={{color:"red"}}>{val}</p>
  </div>

  <div className="mb-3 m-4">
    <label  className="form-label">date of birth:</label>
    <input type="date" className="form-control" id="dob"  name="dob" value={dob} onChange={(e) => setDob(e.target.value)}/>
  </div>


  <div className="mb-3 mt-3 m-4" >
    <label  className="form-label">Password:</label>
    <input type="text" className="form-control" id="n" placeholder="Enter password" name="name" value={pw} onChange={(e) => setPw(e.target.value.replace())} />
    <p style={{color:"red"}}>{pass}</p>
  </div>

  {/* <div className="mb-3 mt-3 m-4" > */}
    {/* <label  className="form-label">adnum:</label> */}
    {/* <input type="hidden" className="form-control " id="a" placeholder="Enter address" name="adnum" value={adnum} onChange={(e) => setAdnum(e.target.value)} /> */}
  {/* </div>  */}
 
  

<center>
  <span><button type="submit" className="btn m-4" style={{backgroundColor:"#61dbfb"}} onClick={handleclick} ><b>Submit</b></button></span>
  <span><button type="reset" className="btn m-4" style={{backgroundColor:"#61dbfb"}}><b>reset</b></button></span>
  </center>
  <div className='m-2' style={{paddingTop:"20px"}}> </div>
</form>
</div>




</div> 
</div>
    </div>
  )
}

export default Signin