import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/Page/Registration";
import Main from "./components/Page/Main";
import AuthorizationRoute from "./components/AuthorizationRoute";
import Authorization from "./components/Page/Authorization"
import PrivateRoute from "./components/PrivateRoute/index"

const App = () => {
  return (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} /> 
      <Route path="/authorization" element={<AuthorizationRoute outlet={<Authorization />} path="/main" />} /> 
      <Route path="/main" element={<PrivateRoute outlet={<Main />} path="/authorization" />} /> 
    </Routes>
  );
}

export default App;