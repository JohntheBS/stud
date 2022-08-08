import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './pages/Signup';
import Layout1 from './layout/Layout1';
import Layout2 from './layout/Layout2';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route path='/' element={<Home/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Route>
        <Route path='/signup' element={<Layout2 />} >
          <Route index element={<Signup />} />
          <Route path='/signup/login' element={<Login />}/>
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
