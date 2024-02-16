import { Routes, Route } from 'react-router-dom';
import RegistrationPage from './components/Page/Registration';

const App = () => {
  return (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} /> 
    </Routes>
  );
}

export default App;
