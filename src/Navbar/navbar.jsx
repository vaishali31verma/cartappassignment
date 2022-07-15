import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Main from '../components/main'
import style from "../components/styles.module.css"
import { BsCartFill } from "react-icons/bs"

const Navbar = () => {

 const navigates = useNavigate()
  return (
    <div className={style.navbar}>
    <div>
     
      <div>
        <img src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052">
        </img>

      </div>
      <div className={style.names}>
        <p>Tanner goods</p>
        <p>Mazama wares</p>
        <p>Featured collection</p>
        <p>Final Sale</p>
      </div>
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginLeft:"40px"}}>
    <div>
      <Link to="/">Home</Link>
      </div>
      
      <div>
      <Link to="/products">Wallets</Link>
      </div>


     <div>
      <Link to="/products2">Tableware</Link>
      </div>
      {/* <i class="cis-cart"></i> */}
      <BsCartFill  onClick={
        ()=>
        navigates("/Cart")
      }/>
      {/* <Link to="/main" element={<Main/>}>main</Link> */}
    </div>
    </div>
    </div>
  )
}

export default Navbar
