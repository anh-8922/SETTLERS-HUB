import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';

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