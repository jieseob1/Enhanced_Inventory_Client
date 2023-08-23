import React from 'react';
import {Routes, Route} from 'react-router-dom';

// import { AnonymousOnlyRoute } from 'components/PermissionRoutes';
// import Login from 'routes/Login';
import Login from '../Login';

// ====

const AuthRoutes = () => (
  <Routes>
    <Route path='/login' element={<Login />} />
  </Routes>
);

export default AuthRoutes;
