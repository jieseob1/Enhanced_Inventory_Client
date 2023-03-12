import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../Home'

//Root Conponent is EntryPoint of Browser
const Root = () => {
    return (
        <Routes>
            <Route path='/' Component={Home} />
        </Routes>
    )
}


export default Root;