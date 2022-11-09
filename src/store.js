import { configureStore } from "@reduxjs/toolkit";
import sslice from "./slice"
  export const store = configureStore ({
    reducer :{
        temp : sslice,
    },

})
