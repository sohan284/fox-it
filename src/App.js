import "./App.css";
import Home from "./app/pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./app/pages/Login";
import SignUp from "./app/pages/SignUp";
import Form from "./app/components/Home/Form";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Users from "./app/components/Home/Users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reg-form" element={<Form />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
