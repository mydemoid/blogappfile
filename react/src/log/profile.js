import React from 'react'
import data from '../data'
import Myblogs from './myblogs'
import {useNavigate } from 'react-router-dom'

function Profile() {

  const nav=useNavigate()
  const [a,setA]=React.useState([data.id,data.name,data.email,data.dob,data.pw])
  const [mylist,setMylist]=React.useState()
 
  console.log(a)

  function reload(){
    const url=`http://localhost:8080/bloglist/${data.id}`
    fetch(url)
    .then(res=>res.json())
    .then((result)=>{
    
    console.log(result)

    setMylist(()=> result.map((data)=>{
        return <Myblogs data={data} reload={reload} />
      //    console.log(data.creator)
        }))
    })
  }
console.log(data.name)
  React.useEffect(()=> {
    const url=`http://localhost:8080/bloglist/${data.id}`
    fetch(url)
    .then(res=>res.json())
    .then((result)=>{
    
    console.log(result)

    setMylist(()=> result.map((data,index)=>{
        return <Myblogs data={data} reload={reload} key={index} />
      //    console.log(data.creator)
        }))
    })
  },[])


  return (
    <div>
         <div class="container-fluid">
        <div class="row">
            <div class="col-2 " style={{padding: "10px",justifyContent: "center",borderRadius: "20px",margin: "20px"}}>
            <div class="container" style={{position:"fixed"}}>
  
                <div  style={{color: "grey",padding: "10px"}}>id: {data.id}</div>
                <div style={{color: "grey",padding: "10px"}}>name: {data.name}</div>
                <div style={{color: "grey",padding: "10px"}}>email: {data.email}</div>
                <div style={{color: "grey",padding: "10px"}}>dob: {data.dob}</div>
                <br/><br/>
                <div ><button style={{backgroundColor: "green",color:"white",padding: "8px",borderRadius: "6px"}} onClick={()=>{nav("/addblog")}} >add blog</button>
                </div><br/>
                <div ><button style={{backgroundColor: "green",color:"white",padding: "10px",borderRadius: "6px"}} onClick={()=>{nav("/updateuser")}} >update</button>
                </div>
                <br/><br/>
            </div>
            
            </div>
            

     <div class="col"  style={{padding: "10px",justifyContent:" center",margin: "10px"}}>

        {mylist}
        
            

            </div>

            
           
            
        </div>
    </div>
    </div>
  )
}

export default Profile
