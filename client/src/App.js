//import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    <BrowserRouter>
        <div>
          <AllRoutes/>
        </div>
    </BrowserRouter>
  );
}

export default App;