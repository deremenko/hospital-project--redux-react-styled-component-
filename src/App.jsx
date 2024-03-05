import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import WaitSpinner from "./components/WaitSpinner";
import AuthorizationRoute from "./components/AuthorizationRoute";
import PrivateRoute from "./components/PrivateRoute/index"

const Main = lazy(() => import("./components/Page/Main"))
const Authorization = lazy(() => import("./components/Page/Authorization"))
const RegistrationPage = lazy(() => import("./components/Page/Registration"))

const App = () => {
  return (
    <Suspense fallback={<WaitSpinner />}>
      <Routes>
        <Route path="/registration" element={<RegistrationPage />} /> 
        <Route path="/authorization" element={<AuthorizationRoute outlet={<Authorization />} path="/main" />} /> 
        <Route path="/main" element={<PrivateRoute outlet={<Main />} path="/authorization" />} /> 
      </Routes>
    </Suspense>  
  );
}

export default App;