//import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/settlershub/list");
      console.log("🚀 ~ data:", data);
    }
    fetchData()
  })
  return (
    <BrowserRouter>
        <div>
          <AllRoutes/>
        </div>
    </BrowserRouter>
  );
}

export default App;