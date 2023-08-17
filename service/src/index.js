import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios"

<<<<<<< HEAD
axios.defaults.baseURL = "https://c628-118-41-48-147.ngrok-free.app/api"
=======
axios.defaults.baseURL = "https://4fa0-118-41-48-147.ngrok-free.app/api"
>>>>>>> 147175d14f703b5eb824037b92ca767531a999e0
axios.defaults.withCredentials = true; //refreshToken cookie를 주고받기 위함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);