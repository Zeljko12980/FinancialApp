import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { searchCompanies } from './api.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(searchCompanies("tsla"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


