
import React, { useContext } from 'react'
import { Maincontext } from '../context/contextapi'
 import SimpleImageSlider from "react-simple-image-slider"
import style from "./styles.module.css"
const Bestselleroftable = () => {
    const {limitedtable} = useContext(Maincontext)
  return (
    <div>
       <div> 
       <div className={style.outerbestseller}>
      
       <div className={style.Bestseller} >
          {
            limitedtable.map((el,i)=>(
              <div className={style.maindivofslidess} >
             
               <img src = {el.images[0]} width={"210px"} height={"214px"}></img>
              <h5 className={style.hedingoftrend}>{el.title}</h5>
              <p>{el.price}</p>
              </div>
          ))
          }
        </div>
          </div> 
    </div>
    </div>
  )
}

export default Bestselleroftable
