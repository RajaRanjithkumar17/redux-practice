
import React,{ useState,useContext } from 'react'
import { Link ,useNavigate,useSearchParams,createSearchParams} from 'react-router-dom'
import { stateContext } from '../context/Contexts'
import "./Home.css"

const Home = () => {

  const con = useContext(stateContext)

  const {state,dispatch} =useContext(stateContext)
  const navigate = useNavigate();

  const addTask = ()=>{

   
    navigate("/iiii")
 
  }


  return (
    <div className='task'>
        <div className='taskList'>
      

        <button onClick={() => addTask()}>upd</button>
        </div>
        <div className='taskList'>
       
            <div>
            <h3 >{con}</h3>
          
            </div>
            
          
      
        </div>

    </div>
  )
}

// contactus@viyaltech.com
export default Home