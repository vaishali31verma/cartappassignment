import axios from "axios"
export default function Main(){
    axios.get(`http://localhost:8080/posts`).then((res)=>{
        console.log(res)
    })
    return (
        <div>
            jeen
        </div>
    )
     
    
}