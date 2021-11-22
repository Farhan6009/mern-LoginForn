import React, { useState } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Error from './Components/Error';
import { Route, Routes } from 'react-router-dom'


function App() {
  const [loginUser, setloginUser] = useState({});
  return (
    <div>
      <Navbar></Navbar>
      <div className="App">
        <Routes>
          <Route path="/" element={loginUser._id ? <Home setloginUser={setloginUser}></Home> : <Login setloginUser={setloginUser}></Login>}></Route>
          <Route path="/login" element={<Login setloginUser={setloginUser}></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/*" element={<Error></Error>}></Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
