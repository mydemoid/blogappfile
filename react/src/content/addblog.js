import React from 'react'
import data from '../data'

function Addblog() {

    const [heading,setHeading]=React.useState("")
    const [readme,setReadme]=React.useState("")
    const [content,setContent]=React.useState("")
    const [creator,setCreator]=React.useState(data.name)
    const [creatorid,setCreatorid]=React.useState(data.id)
    const [like,setLike]=React.useState(0)
console.log(data.name)
console.log(data.id)
    function publish(e){
        e.preventDefault()
    
        const blog={creatorid,creator,heading,readme,content,time,like}
           console.log(blog) 
        fetch("http://localhost:8080/createblog",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
          }).then(() => {
            console.log("added")
      
            // http://localhost:8080/
      
          })
       
          setContent("")
          setHeading("")
          setReadme("")
      
      }
      let time = new Date();
    //   var hours = now.getHours() 
      

  return (
    <div>
          <div  style={{color:"white",backgroundColor:"black"}}>
        <div className='container p-2'>
      <div className='row'>
        <div className='col-md m-2'>
         
        <form action="/action_page.php" className='bg-dark p-2' style={{borderRadius:"20px"}} autoComplete="off">
          
    <h3 style={{textAlign:"center",color:"#61dbfb",padding:"10px"}} >blog space</h3>

  <div className="mb-3 mt-3 m-4" >
    <label  className="form-label">headline:</label>
    <textarea type="text" className="form-control" id="n" placeholder="Enter name" name="heading" value={heading} style={{width:"40%",height:""}}  onChange={(e) => setHeading(e.target.value)}/>
  </div>
  <div className="mb-3 mt-3 m-4" >
    <label  className="form-label">readme:</label>
    <textarea type="text" className="form-control" id="n" placeholder="Enter name" name="heading" value={readme} style={{width:"40%",height:""}}  onChange={(e) => setReadme(e.target.value)}/>
  </div>
  <div className="mb-3 mt-3 m-4" >
    <label  className="form-label">content:</label>
    <textarea type="text" className="form-control" id="n" name="content" value={content} style={{height:"300px"}}  onChange={(e) => setContent(e.target.value)} />
  </div>
  
  <center><button type="submit" className="btn m-4" style={{backgroundColor:"#61dbfb"}}  onClick={publish} ><b>publish</b></button></center>

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
    </div>
    </div>
  )
}

export default Addblog
