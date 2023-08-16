import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios"

axios.defaults.baseURL = "http://cbe9-118-41-48-147.ngrok-free.app/api"
axios.defaults.guuwithCredentials = true; //refreshToken cookie를 주고받기 위함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);