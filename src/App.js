import './App.css';
import Home from './app/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './app/pages/Login';
import SignUp from './app/pages/SignUp';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
