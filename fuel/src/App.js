import { BrowserRouter } from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarme from './components/Navbarme';

function App() {
  return (
    <BrowserRouter>    
    <div className="App">
      <Navbarme />
    </div>
    </BrowserRouter>

  );
}

export default App;
