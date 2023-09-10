import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../Home'
import Login from '../Login';
import AuthRoutes from '../AuthRoutes';
//Root Conponent is EntryPoint of Browser
const Root = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}


export default Root;