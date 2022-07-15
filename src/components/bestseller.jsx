
import React, { useContext } from 'react'
import { Maincontext } from '../context/contextapi'
 import SimpleImageSlider from "react-simple-image-slider"
import style from "./styles.module.css"
const Bestseller = () => {
    const {Bestseller} = useContext(Maincontext)
  return (
    <div>
       <div> 
       <div className={style.outerbestseller}>
      
       <div className={style.Bestseller} >
          {
            Bestseller.map((el,i)=>(
              <div className={style.maindivofslidess} >
             
              <img src = {el.images[0]} width={"210px"} height={"214px"} alt="g"></img>
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

export default Bestseller
