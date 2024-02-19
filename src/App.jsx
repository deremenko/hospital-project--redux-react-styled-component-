import { Routes, Route } from 'react-router-dom';
import RegistrationPage from './components/Page/Registration';
import AuthorizationPage from './components/Page/Authorization';

const App = () => {
  return (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} /> 
      <Route path="/authorization" element={<AuthorizationPage />} /> 
    </Routes>
  );
}

export default App;
