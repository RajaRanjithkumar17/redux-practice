import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Form1 from './login/Form1';
import Home from './home/Home';
// import Tasks from './tasks/Tasks';
// import { sslice } from './slice';
import { initialState } from './context/reducer';

import Iiii from './tasks/Iiii';
import { stateContext } from './context/Contexts';
import { stateReducer } from './context/reducer';
import Result from './Result';
import { store } from './store';
import { Provider } from 'react-redux';

// import { demo } from './context/reducer';



function Routerscomp (){
  const [state, dispatch] = useReducer(stateReducer,initialState)
  return (
    <Provider store={store}>
     
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form1 />}></Route>
          <Route path='home' element={<Home />}></Route>
          {/* <Route path='tasks' element={<Tasks />}></Route> */}
          <Route path='iiii' element={<Iiii />}></Route>
          <Route path='result' element={<Result />}></Route>
          
        </Routes>
    
     </BrowserRouter>
    </Provider>
   
  
  )
  
  
  
 
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Routerscomp  />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
