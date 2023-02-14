import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Button from '../components/Button';
import axios from 'axios';
import Header from '../components/Header';
import Main from '../components/Main';
const url = 'https://dog.ceo/api/breed/hound/images' //Returns an array of all the images from a breed, e.g. hound//

const ByBreed = () => {
const [images,setImage]= useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        const res =  axios.get(url)
      .then((res) => {
        setImage(res.data.message)
        console.log(res.data.message)
      })
      .catch((err) => console.error(err));


    },[])
    return (
        <div className='by-breed-container'>
            <Header>
                <Button className={'headerClass button-byBreed'} text={'HOME 🏠'} callBack={()=> navigate('/')}/>
            </Header>
            <Main>

                {images.map((image , index )=>{
                    
                    return(
                        <img className='breedImage' key={index} src={image} alt="dog by breed" />
                        )
                        
                        
                    })}
            </Main>
        </div>
    );
};

export default ByBreed;