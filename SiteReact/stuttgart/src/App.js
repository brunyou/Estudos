import './App.css';
import Carousel from './components/Carousel';
import Home from './components/Home';
import NavBar from './components/NavBar';
import GoogleReviews from './components/GoogleReviews';
import Sobre from './components/Sobre';
import Mapa from './components/Mapa';


function App() {
  return (
    <div className="App">
    <NavBar id='navbar'/>
    <section className='body'>
    <Home/>
    <Sobre/>
    <Carousel/>
    <GoogleReviews/>
    <Mapa/>
    </section>
  
    </div>
  );
}

export default App;
