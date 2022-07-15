import React, { useContext } from 'react'
import { Maincontext } from '../context/contextapi'
 import SimpleImageSlider from "react-simple-image-slider"
import style from "./styles.module.css"

const Products2 = () => {
    const  {Tableware,handledetail,handledetail2} = useContext(Maincontext)

  return (
    <div>
       <div> 
       <div className={style.outerbestseller}>
      
       <div className={style.Bestseller}  >
          {
            Tableware.map((el,i)=>(
              <div className={style.maindivofslidess} onClick={()=>handledetail2(el)}>
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

export default Products2

