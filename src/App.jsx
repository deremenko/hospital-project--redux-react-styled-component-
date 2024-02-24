import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/Page/Registration";
import Main from "./components/Page/Main";
import PrivateRoute from "./components/PrivateRoute/index"

const App = () => {
  return (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} /> 
      <Route path="/authorization" element={<PrivateRoute WrappedComponent={<Main />} />} /> 
      <Route path="/main" element={<PrivateRoute WrappedComponent={<Main />} />} /> 
    </Routes>
  );
}

export default App;
