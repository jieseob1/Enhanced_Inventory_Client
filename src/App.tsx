import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./route/Home";
const App = () => {
    console.log("hihi")
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
            </Routes>
        </Router>
    )
}

export default App;