
import './App.css';
import Home from './componentes/Home';
import NavBar from './componentes/NavBar';
import Servicos from './componentes/Servicos';
import Contato from './componentes/Contato';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Servicos/>
      <Contato/>
    </div>
  );
}

export default App;
