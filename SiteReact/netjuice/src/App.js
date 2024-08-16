
import './App.css';
import Home from './componentes/Home';
import NavBar from './componentes/NavBar';
import Servicos from './componentes/Servicos';
import Contato from './componentes/Contato';
import Portifolio from './componentes/Portifolio';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Servicos/>
      <Portifolio/>
      <Contato/>
    </div>
  );
}

export default App;
