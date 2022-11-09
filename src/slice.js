import { createSlice } from "@reduxjs/toolkit";

export const sslice = createSlice({
    name:"react",
    initialState:{
        age :22,
        name:"ranjith",
        
    },
    reducers:{
        imctage:(state,action)=>{
            console.log(state);
            state.age += 1
        
        },

        // fun:(state,action)=>{
        //     state.task=action.payload

        // }
    }
})
export const {imctage,fun}= sslice.actions
 export default sslice.reducer