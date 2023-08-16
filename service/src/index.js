import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios"

<<<<<<< HEAD
axios.defaults.baseURL = "https://53c4-121-181-4-73.ngrok-free.app/api"
=======
axios.defaults.baseURL = "https://53c4-121-181-4-73.ngrok-free.app/api/"
>>>>>>> 91b9e0e72dc3d496d8bad4609f3026108478e96c
axios.defaults.withCredentials = true; //refreshToken cookie를 주고받기 위함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);