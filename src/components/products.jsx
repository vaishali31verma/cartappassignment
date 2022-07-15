import React, { useContext } from 'react'
import { Maincontext } from '../context/contextapi'
 import SimpleImageSlider from "react-simple-image-slider"
import style from "./styles.module.css"

const Products = () => {
    const {productdata,handledetail} = useContext(Maincontext)

  return (
    <div>
       <div> 
       <div className={style.outerbestseller}>
      
       <div className={style.Bestseller}  >
          {
            productdata.map((el,i)=>(
              <div className={style.maindivofslidess} onClick={()=>handledetail(el)}>
              <SimpleImageSlider
                width={210}
                height={214}
                images={el.images}
                showBullets={true}
                showNavs={false}
                
              />      
                  
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

export default Products

