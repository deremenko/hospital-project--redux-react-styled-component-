import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import WaitSpinner from "./components/WaitSpinner";
import RegistrationPage from "./components/Page/Registration";
import AuthorizationRoute from "./components/AuthorizationRoute";
import Authorization from "./components/Page/Authorization"
import PrivateRoute from "./components/PrivateRoute/index"

const Main = React.lazy(() => import("./components/Page/Main"))

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