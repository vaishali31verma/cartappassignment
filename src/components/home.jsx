import React, { useContext } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import style from "../components/styles.module.css"
import { Maincontext } from '../context/contextapi';
import Bestseller from './bestseller';
import Trending from './Trending';
import { useNavigate } from "react-router-dom"
import Bestselleroftable from './tablewarepro';

const slideImages = [
    {
        url: 'https://i.etsystatic.com/14967755/r/il/29bf8b/1748217203/il_fullxfull.1748217203_rfar.jpg',
        caption: 'Slide 1'
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0044/9802/files/1002-BTSKonbuBagLifestyle-20_1944x.jpg?v=1657162074',
        
        caption: 'Slide 2'
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0044/9802/collections/Mazama-Onyx-Slider_1800x.jpg?v=1650562638',
        caption: 'Slide 3'
      },
      ];


const Home = () => {
  const {handlesort,handlesortoftable} = useContext(Maincontext)
  const navigates = useNavigate()
  return (
     
       <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})` ,width:"100%" ,height:"500px"}  }>
                {/* <span>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
         <div>
            <h1>Trending Right Now</h1>

         </div>
        
         <div>
            <Trending />
         </div>
        <div>
            <img src="https://i.im.ge/2022/07/10/up9XDS.png" alt="erjor"></img>
        </div>
        <div className={style.imgofwallet}>
        <div>
           <img src="https://cdn.shopify.com/s/files/1/0044/9802/collections/tanner-goods-natural-belts-product-hero_900x.jpg?v=1623179892" alt="" />
        </div>
        
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0044/9802/collections/Tanner-Goods-Wallet-Collection_1800x.jpg?v=1647381639" alt="" />
        </div>
        
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0044/9802/collections/Mazama-Tableware-Lifestyle-Hero_1800x.jpg?v=1631904582" alt="" />
        </div>
        </div>
        <h1>Wallet</h1>
        <div>
           <form>
            <select onChange={(e)=>{handlesort(e.target.value)}}>
              <option value="asc">low to high</option> 
              <option value="desc">high to low</option>    
             </select>
             </form>
         </div>
         
          <button onClick={()=>{
            navigates("/products")}}
         >See More..</button>
        <Bestseller/>
        <h1>Tableware</h1>
       <div>
           <form>
            <select onChange={(e)=>{handlesortoftable(e.target.value)}}>
              <option value="asc">low to high</option> 
              <option value="desc">high to low</option>    
             </select>
             </form>
         </div>
          <button onClick={()=>{
            navigates("/products2")}}
         >See More..</button>
        < Bestselleroftable/>
       <div className={style.footer}>
         <img src="https://i.im.ge/2022/07/10/up5uZ1.png" alt="b"></img>
       </div>


       
      </div>
      
  )
}

export default Home
