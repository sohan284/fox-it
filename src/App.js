import './App.css';
import Home from './app/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './app/pages/Login';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
