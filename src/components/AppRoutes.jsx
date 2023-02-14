import { useRoutes } from 'react-router-dom';
import React from 'react';
import RandomImage from '../Pages/RandomImage';
import Home from '../Pages/Home';
import ByBreed from '../Pages/ByBreed';
import AllBreeds from '../Pages/AllBreeds';
import GetBreed from '../Pages/GetBreed';

const AppRoutes = () => {
    return useRoutes (
        [
            {
              element: <RandomImage/>,
              path: '/randomImage',
            },
            {
              element: <ByBreed/>,
              path: '/bybreed',
            },
            {
                element: <Home/>,
                path: '/',
              },
              {
                element: <AllBreeds/>,
                path: '/allbreeds',
              },
              {
                element:<GetBreed/>,
                path:`getbreed`
              }
        ]
        );
    
};

export default AppRoutes;
 