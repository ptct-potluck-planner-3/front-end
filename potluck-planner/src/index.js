import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {render} from "react-dom";


const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>,
    rootElement 
);


