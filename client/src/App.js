import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/cookbook/list");
      console.log("🚀 ~ data:", data);
    }
    fetchData()
  })
  return (
    <div>
      Good Morning
    </div>
  );
}

export default App;