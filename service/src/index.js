import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios"

axios.defaults.baseURL = "https://53c4-121-181-4-73.ngrok-free.app/api/"
axios.defaults.withCredentials = true; //refreshToken cookie를 주고받기 위함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);