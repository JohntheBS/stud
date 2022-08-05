import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout1 from './layout/Layout1';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          {/* <Route path='/' element={<Home/>} /> */}
          {/* <Route path='/about' element={<About/>} /> */}
          {/* <Route path='/contact' element={<Contact/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
