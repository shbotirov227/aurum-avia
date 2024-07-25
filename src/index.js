import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './i18n';
import Table from './pages/Table/Table';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/table' element={<Table />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>

);
