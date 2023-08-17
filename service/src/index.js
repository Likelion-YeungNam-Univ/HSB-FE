import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios"

axios.defaults.baseURL = "https://3327-2001-e60-303c-e578-d13-c8b3-553a-ed02.ngrok-free.app/api"
axios.defaults.withCredentials = true; //refreshToken cookie를 주고받기 위함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);