
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Button from '../components/Button';
import axios from 'axios';
import Header from '../components/Header';
import Main from '../components/Main';
const url = 'https://dog.ceo/api/breed/hound/images' //Returns an array of all the images from a breed, e.g. hound//

const AllBreeds = () => {
    const navigate = useNavigate()
    const [breeds, setBreeds] = useState({});
    
    useEffect(()=>{
        console.log('hola')
        const res =  axios.get('https://dog.ceo/api/breeds/list/all')
        .then((res) => {
            console.log(res);  
            setBreeds(res.data.message);
        })
        .catch((err) => console.error(err));
        
    },[]);
   const handleBreed =(breed)=>{
    navigate('/getbreed')
        const result = axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((res)=>localStorage.setItem('url', res.data.message))
        .catch(err=>console.error(err));
        localStorage.setItem('breed', breed)
        
      }
    return (
        <div className='all-breads-container'>
        <Header className='headerClass'>

                <button className='headerClass button-breed' onClick={()=>navigate('/')}>HOME 🏠</button>
                <button className='headerClass button-breed' onClick={()=>navigate('/getbreed')}>🔍SEARCH</button>

                

        </Header>
        <Main>
         <table className='table'>
            <thead className='subreedsClass'>
                <tr>
                        <th>Breed</th>
                        <th>dog subbreeds</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(breeds).map(([breed, subBreeds]) => (
                <tr className='subreedsClass' key={breed}>
                <td className='subreedsClass breedTd'><a  onClick={()=>
                   handleBreed(breed)
                    }>{breed}</a></td>
                <td className='subreedsClass sub-breeds-Class'>{subBreeds.join(",  ")}</td>
                </tr>
                ))}
            </tbody>
          </table>
            </Main>
        </div>
    );
};

export default AllBreeds;