import React, { useState } from 'react'
import { useContext } from 'react'
import { Maincontext } from '../context/contextapi'

const Cart = () => {
   
    const {cart,handledelete,total} = useContext(Maincontext)
    
  
  return (
    <div>
     {cart.map((e)=>(
        e.map((x)=>{
            return(
                <div style={{border:"2px solid grey",margin:"30px"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
           
             <div style={{display:"flex"}}>
             {x.images.map((b)=>(
               
                <div style={{width:"400px"}}>
                <img src={b} alt="kjrfn" style={{width:"200px",height:"200px"}}></img>
                </div>
             ))}
             </div>
             <div>{x.title}</div>
             <div>${x.price}</div>
             <div>{x.qty}</div>
             <div>{x.Returns_Exchange[0]}</div>
             <div>
                <button onClick={()=>handledelete(x.id,x.title)}>Delete</button>
             </div>
            </div>
            </div>
            )
      })
     ))}
     <div>
      Total Amount :{total}
     </div>
    </div>
  )
}

export default Cart
