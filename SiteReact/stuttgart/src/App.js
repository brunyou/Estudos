import './App.css';
import Carousel from './components/Carousel';
import Home from './components/Home';
import NavBar from './components/NavBar';
import slides from "./data/carouselData.json";

function App() {
  return (
    <div className="App">
    <NavBar id='navbar'/>
    <Home/>
    <Carousel data={slides} />
  
  
    </div>
  );
}

export default App;
