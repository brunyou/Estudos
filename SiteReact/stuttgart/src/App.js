import './App.css';
import CarouselReactstrap from './components/CarouselReactstrap';
import Home from './components/Home';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
    <NavBar id='navbar'/>
    <Home/>
    <CarouselReactstrap/>
  
    </div>
  );
}

export default App;
