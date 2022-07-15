import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

 const Maincontext = createContext()

 const Maincontextapi =({children})=>{
    const [trendingdata,settrengthdata] = useState([])
    const [Bestseller,setbestseller] = useState([])
    const [sorting,setsorting] = useState("asc")
    const [productdata,setproductdata] = useState([])
    const [deatilofwallet,setdetailofwallet] = useState([])
   const [cart,setcart] = useState([])
    const [count,setcount] = useState(1)
    const navigates = useNavigate()
    const [Tableware,settableware] = useState([])
    const [limitedtable,setlimitedtable] = useState([])
    const [sorttable,setsorttable] = useState("")
    const [total,settotal] = useState(0)
   
    const getdata =()=>{
        axios.get(`http://localhost:8080/posts`).then((res)=>{
              settrengthdata(res.data)
              
        })
    }
    const getdatasofbest =(s,p)=>{
     
      axios.get(`http://localhost:8080/wallet?_sort=price&_order=${s}&_page=1&_limit=4`).then((res)=>{
            setbestseller(res.data)
           
      })
  }
  
  const getproductsdata =()=>{
    axios.get(`http://localhost:8080/wallet`).then((res)=>{
          setproductdata(res.data)
          
    })
}

const gettableware =(s,p)=>{
  axios.get(`http://localhost:8080/tableware`).then((res)=>{
        settableware(res.data)
      
  })
}
const gettablewareoflimied =(s)=>{
  axios.get(`http://localhost:8080/tableware?_sort=price&_order=${s}&_page=1&_limit=4`).then((res)=>{
        setlimitedtable(res.data)
        
  })
}
const handledetail =(e)=>{
  navigates("/description")

 localStorage.setItem("data",JSON.stringify(e))
} 
const handledetail2 =(e)=>{
  navigates("/description2")

 localStorage.setItem("data",JSON.stringify(e))
}  
const handleadd=(id,qy,title)=>{
 let m= Tableware.map((e)=>{
   
    if(e.id===id && e.title===title){
      
      return {
        ...e,
        qty:e.qty+qy
      }
    }
    else{
      return e
    }
    
  })
  settableware(m)
}
const handlesub=(id,qy,title)=>{
  let m= Tableware.map((e)=>{
   
    if(e.id===id && e.title===title){

      return {
        ...e,
        qty:e.qty-qy
      }
    }
    else{
      return e
    }
    
  })
  settableware(m)
  
 }
 const handleaddwallet=(id,qy,title)=>{
  let m= productdata.map((e)=>{
    
     if(e.id===id && e.title===title){
       console.log(e)
       return {
         ...e,
         qty:e.qty+qy
       }
     }
     else{
       return e
     }
     
   })
   setproductdata(m)
 } 
 const handlesubwallet=(id,qy,title)=>{
  let m= productdata.map((e)=>{
    
     if(e.id===id && e.title===title){
       console.log(e)
       return {
         ...e,
         qty:e.qty-qy
       }
     }
     else{
       return e
     }
     
   })
   setproductdata(m)
 } 
useEffect(()=>{
        getdata()
        getproductsdata()
       
   },[])
useEffect(()=>{
    getdatasofbest(sorting)
   
},[sorting])
useEffect(()=>{
  gettableware()
},[])

useEffect(()=>{
  gettablewareoflimied(sorttable)
},[sorttable])
const handlesort =(x)=>{
   setsorting(x)
}
const handlesortoftable =(l)=>{
   setsorttable(l)
}
const handlebuybtn=(id,m)=>{
  
const updateddatas=  productdata.filter((e)=>{
  return e.id===id && m===e.title

})
cart.push(updateddatas)
setcart(cart)
navigates("/Cart")
}

const handlebuybtntable=(id,p)=>{


const updateddatas=  Tableware.filter((e)=>{
    return e.id===id && p===e.title
  
})
cart.push(updateddatas)
setcart(cart)
navigates("/Cart")
}

let maths =()=>{
  const v=cart.map((e)=>(
    e.reduce((acc,k)=>(
       acc+k.price*k.qty
     ),0)
   
   ))
   const kk = v.reduce((acc,d)=>{
    return  acc+d
    },0)
  settotal(kk)
}

const handledelete=((id,title)=>{

let  deleteupp = cart.map((k)=>(
     k.filter((h)=>(
    (h.id!==id && title!==h.title)
     ))
)
 )
  setcart(deleteupp)
 
 
 })

useEffect(()=>{
  maths()
})



    return (
      <div>
        <Maincontext.Provider  value={{handleaddwallet,handlesubwallet,handledetail2,handlebuybtntable,handlesortoftable,Tableware,trendingdata ,Bestseller,handlesort,productdata,handledetail,deatilofwallet,handleadd,count,handlesub,handlebuybtn,cart,handledelete,limitedtable,total}}>
         {children}
        </Maincontext.Provider>
      </div>
    )
 }

 export {Maincontext}
 export {Maincontextapi}