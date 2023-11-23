
import './App.css';
import Home from './componentes/Home';
import NavBar from './componentes/NavBar';
import Servicos from './componentes/Servicos';

function App() {
  return (
    <div className="App">
      <NavBar className='navbar'/>
      <Home className='home'/>
      <Servicos/>
    </div>
  );
}

export default App;
