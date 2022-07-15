import React, { useState } from 'react'
import { useContext } from 'react'
import { Maincontext } from '../context/contextapi'
import { Carousel } from 'react-carousel-minimal';
import style from "./styles.module.css"
const Wholedisoftbale = () => {
  const {handleadd,handlesub,handlebuybtntable,Tableware} = useContext(Maincontext)
    const localdata = JSON.parse(localStorage.getItem("data"))
    const o=[]
    var p 
    localdata.images.map((e)=>{
      o.push({image:e})
      
    }) 
  return (
    <div className= {style.outerofdis}>
      <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
             data={o}
            time={2000}
            width="450px"
            height="450px"
            radius="10px"
            slideNumber={false}
            automatic={false}
            dots={false}
           slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
     
    </div>
    <div>
     <div>
      <h1>{localdata.title}</h1>
     </div>
     <div style={{display:"flex", }}>
     <p style={{height:"30px",padding:"auto",marginTop:"-7px"}}>Description: </p>
     <div style={{color:"GrayText" ,width:"800px", textAlign:"left",fontFamily:"monospace"}}>{localdata.Description.Para}</div>
     </div>
     <div>
      {localdata.Description.List.map((e)=>(
        <li style={{ width:"500px" ,textAlign:"left",marginTop:"2px",fontFamily:"monospace"}}>{e}</li>
      ))}
     </div>
     <div style={{textAlign:"left", color:"maroon"}}>Price: ${localdata.price}</div>
     <div style={{textAlign:"left", color:"teal"}}>color: {localdata.colors}</div>
     <div style={{display:"flex"}}>
     
    <button onClick={()=>{handleadd(localdata.id,1,localdata.title) }} disabled={p===10} >+</button>
    {Tableware.map((e)=>{
           if(e.id===localdata.id){
             p=e.qty
            console.log(p)
           return <div>{e.qty}</div>
           }
})}
   
    <button onClick={()=>{handlesub(localdata.id,1,localdata.title)}} disabled={p==1}>-</button>
    </div>
    <div style={{textAlign:"left", color:"maroon"}}>

      <button onClick={()=>handlebuybtntable(localdata.id,localdata.title)} >Buy now</button>
    </div>
    </div>
     
    </div>
  )
}

export default Wholedisoftbale
