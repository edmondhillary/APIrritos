import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Button from '../components/Button';
import axios from 'axios';
import Header from '../components/Header';
import Main from '../components/Main';


const GetBreed = () => {
    const navigate = useNavigate()
    const [url, setUrl] = useState('')
    // const [breeds, setBreeds] = useState('');
// const breedUrl =   setUrl(localStorage.getItem('breedURL'));
const breed = localStorage.getItem('breed')

useEffect(()=>{
    console.log(breed)
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((res)=>setUrl(res.data.message))
    .catch(err=>console.error(err))
},[]);

    const handleOnChange = (e)=>{
        console.log('holaaa onchaneg', e.target.value);
        const data = e.target.value;
        axios.get(`https://dog.ceo/api/breed/${data}/images/random`)
        .then((res)=>setUrl(res.data.message))
        .catch(err=>console.error(err));    
        

    }
    return (
        <div className='get-breed-container'>
            <Header>

                <Button text={'HOME 🏠'} callBack={()=>navigate('/')} className='get-breed-button'/>
                <Button text={'More Breeds'} callBack={()=>navigate('/allbreeds')} className='get-breed-button'/>
                <input type={'text'}  onChange={handleOnChange} className={'get-breed-button inputs'} id={'breedInput'} placeholder={'Type the breed'} autoFocus/>
            </Header>
            <Main>

            {url && <img className='get-breed-img' src={url} />}
            </Main>
        </div>
    );
};

export default GetBreed;