import './styles.css';
import { Routes, Route } from 'react-router-dom';
import { TestPage } from './components/TestPage';
import Login from './components/Login';
import Register from './components/Register';
import LoginAxios from './components/LoginAxios';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loginAxios" element={<LoginAxios />} />
      </Routes>
    </>
  );
}

export default App;
