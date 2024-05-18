import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import axios from "axios";

function App() {
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
  return (
    
    <Home/>
  );
}

export default App;
