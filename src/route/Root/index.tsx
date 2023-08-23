import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../Home'
import Login from '../Login';
//Root Conponent is EntryPoint of Browser
const Root = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}


export default Root;