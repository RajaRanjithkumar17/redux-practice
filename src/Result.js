import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { imctage,fun } from './slice'

const Iiii = () => {
  const state = useSelector((data)=>data ).temp
  const dispatch = useDispatch()

   console.log(state);

  

       const imcage = ()=>{
           dispatch(imctage())
         
       }
  



  return (
    <div>
        <h1>{state?.age}</h1>
      
      <button onClick={()=>imcage()}>age add</button>
    </div>
  )
}

export default Iiii