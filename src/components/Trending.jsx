import React, { useContext } from 'react'
import { Maincontext } from '../context/contextapi'
 import SimpleImageSlider from "react-simple-image-slider"
import style from "./styles.module.css"
const Trending = () => {
    const {trendingdata} = useContext(Maincontext)
  // console.log(trendingdata[0].images.length)
    // let x = trendingdata
    // // console.log(x)
    // trendingdata.map((el,i)=>(
    //     console.log(el.images.length)
        
    // ))
  return (
    <div> 
       <div  className='outerdiscpdiv'>
      
       <div className={style.innerslider} >
          {
            trendingdata.map((el,i)=>(
              <div className={style.maindivofslide} >
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
  )
}

export default Trending
