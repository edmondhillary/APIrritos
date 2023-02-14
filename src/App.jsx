import React, {useEffect, useState} from 'react';
import './App.css';
import Button from './components/Button';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import { useNavigate } from 'react-router-dom';
import RandomImage from './Pages/RandomImage';
import Home from './Pages/Home'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
// const handleBreed =  ()=>{
  
  //   console.log();
  
  //   console.log('holaBReed');
  //   const res =  axios.get('https://dog.ceo/api/breeds/list/all')
  //   .then((res) => console.log(res.data.message))
  //   .catch((err) => console.error(err));
  
  
  // }
 
  
  function App() {

    return (
    <BrowserRouter>
      <AppRoutes/>
      {/* <Home/> */}
    </BrowserRouter>
     
    );
  }
  
  export default App;
  