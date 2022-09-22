import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/generalStyles/index.css';
import { BrowserRouter } from "react-router-dom";
import { Paths } from "./navigation/Paths" 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Paths />     
  </BrowserRouter>
)

