
import './App.css';
import Contato from './componentes/Contato';
import Home from './componentes/Home';
import NavBar from './componentes/NavBar';
import Servicos from './componentes/Servicos';
import Sobre from './componentes/Sobre';

function App() {
  return (
    <div className="App">
      <NavBar className='navbar'/>
      <Home className='home'/>
      <Servicos/>
      <Sobre/>
      <Contato/>
    </div>
  );
}

export default App;
