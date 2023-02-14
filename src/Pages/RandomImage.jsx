import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';


const RandomImage = () => {
    const navigate = useNavigate()
    const url = 'https://dog.ceo/api/breeds/image/random'
    const [image,setImage] = useState('');
   useEffect(()=>{
        const res =  axios.get(url)
      .then((res) => {
        setImage(res.data.message)
        console.log(res.data.message)
        //  const response = JSON.stringify(res.data.message);
        //  console.log('soy parseeee',JSON.parse(response))
        
         
      })
      .catch((err) => console.error(err));


    },[])
    const handleClick = async () => {
        const result = await axios.get('https://dog.ceo/api/breeds/image/random');
        setImage(result.data.message);
      };
    return (
        <div className='randomContainer'>

        <Header className='headerClass'>

            <button className='headerClass' onClick={()=>navigate('/')}>HOME 🏠</button>
            <button className='headerClass' onClick={handleClick}>Random click</button>
        </Header>
        <Main className='imageRandom'>
            <img className='imageRandom' src={image} alt="randomImage" />

        </Main>
        </div>
    );
};

export default RandomImage;