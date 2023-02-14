import React, {useEffect, useState} from 'react';
import Button from '../components/Button';
import axios from 'axios';
import Header from '../components/Header';
import Main from '../components/Main';
import { useNavigate } from 'react-router-dom';
// import RandomImage from './RandomImage';

const Home = () => {
    const navigate = useNavigate()
    const [breeds, setBreeds] = useState({});

    const getBreedList =()=>{
      console.log('hola')
      const res =  axios.get('https://dog.ceo/api/breeds/list/all')
      .then((res) => {
        console.log(res);  
        //  const response = JSON.stringify(res.data.message);
        //  console.log('soy parseeee',JSON.parse(response))
         setBreeds(res.data.message);
         
      })
      .catch((err) => console.error(err));
  }
    return (

    <div className='center-buttons'>

            <h1>-API-RRITOS-</h1>
        <Header className='space' >
            <Button className={'headerClass homeButton'} text={'Bring All the Breeds'} callBack={()=>navigate('/allbreeds')} />
            <Button className={'headerClass homeButton'} text={'Bring Random Image from Breed'}callBack={()=>navigate('/randomImage')}/>
            <Button className={'headerClass homeButton'} text={'Bring All image from specific  Breeds'} callBack={()=>navigate('/bybreed')}/>
        </Header>
        
    </div>
    
    );
};

export default Home;