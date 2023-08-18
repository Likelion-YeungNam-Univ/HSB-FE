import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios"

axios.defaults.baseURL = "https://926e-58-224-72-100.ngrok-free.app/api"
axios.defaults.withCredentials = true; //refreshToken cookie를 주고받기 위함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);