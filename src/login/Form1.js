import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Form1.css"
import data from '../Credentials/Userdetail.json'


const Form1 = () => {
  const navigate = useNavigate();

  const [userName , setUserName]= useState([])
  const [userPwds ,setUserPwd]= useState([])



  const HandelSub = (sub)=>{
    sub.preventDefault();

    var detail =  data.map((index)=>{ return(index.usersName)  })
     
     
    var ind = detail.indexOf(userName);
    console.log(ind);

    var pwddetail =  data.map((index)=>{ return(index.password)})
    var inde = pwddetail.indexOf(userPwds);
    console.log(inde);
   
    console.log("sub",detail,pwddetail,userName,userPwds);
 
    if (ind===inde){                                          

      console.log("validated");

      navigate('result');
      
    }
    else
    {
      alert("invalid user name or password")
    }

    
    
   
  }

  

const handelName = (nam)=>{
   if (nam.target.name==="userName") {
   setUserName(nam.target.value) 
  }

} 
const handelPwd = (pwd)=>{ 
  if (pwd.target.name==="userpwd") {
    setUserPwd(pwd.target.value) 
  }
 
}


return (
    <div className='loginForm'>
      <div className='forms'>
      <form onSubmit={HandelSub}>
       
        <input onChange={handelName} name="userName" placeholder='User Name' value={userName}/>
        <input  onChange={handelPwd} type={"password"} name="userpwd" placeholder='Password' value={userPwds}/>
        <input type={"submit"} id="submit"/>
      </form>

      </div>
  
      
       
     </div>
  )

}
export default Form1