import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Summary from "./components/Summary";


function App() {
 
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/:id' element={<Summary/>} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
