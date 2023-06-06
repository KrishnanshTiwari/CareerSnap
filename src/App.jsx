import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Body from './components/Body/Body';
import Home from './components/Home/Home'

import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Body />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;