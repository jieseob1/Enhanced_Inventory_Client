import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '../Login';
import { Button } from '@shopify/polaris';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div>
                홈 헬로헬로 hello 맞아 잘돼? 너무 잘되는데...
            </div>
            <div>
                아니 왜 안되냐규ㅜ
            </div>
            <Link to={"/login"}>login page</Link>
        </>
    )
};

export default Home;