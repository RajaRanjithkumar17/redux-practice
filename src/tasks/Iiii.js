import { stateContext } from "../context/Contexts";
import { useContext , useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import "./iiii.css"
import axios from "axios";
// import { prtice } from "../context/reducer";

const Iiii = () => {

  let [setval, setdata] = useState([])
  
  console.log(typeof setval,setval);
  // 3. Create out useEffect 
  
//using axios
  const apiget = async()=>{
    const res = await axios.get("https://gorest.co.in/public/v2/comments");
    setdata(res?.data);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    

    })
    .then(function(response) {
      return response.json()
    })
    

    // .then 
    .then(( response)=>  console.log(response))
   
  }

  useEffect(()=>{
    apiget()
  },[])

  // axios.post("https://gorest.co.in/public/v2/comments",{
  //   data:{
  //     name:"ranjith",
  //     post_id:'1246',
  //     email:"ranjith@gmsil.com",
  //     body:"front end developer"
  //   }
  // })

  // using fetch mtd
  // useEffect(() => { 
  //   fetch("https://gorest.co.in/public/v2/comments")
  //   .then(response => response.json())
   
  //   .then(data => setdata(data))
  // },[])

  // fetch("https://gorest.co.in/public/v2/comments",{
  //   method:"POSt",
  //   body: JSON.stringify({
  //     id:1998,
  //     name:"ranjith",
  //     post_id:'1246',
  //     email:"ranjith@gmsil.com",
  //     body:"front end developer"
  //   }),
  //   headers:{
  //     'Content-type': 'application/json; charset=UTF-8',
  //   }
    
  // })
  // .then((response)=>(response.json))
  // .then((data)=> console.log(data))
  
return (

  setval?.map((index)=>{
    return(
      <div key={index} className="card">
       
        <h1>{index.name}</h1>
        <h1>{index.email}</h1>

      </div>
    )
  })
 
);

  
}

export default Iiii

