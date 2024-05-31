import Entrada from "../../img/entrada.jpeg"
import "./Home.css"

const Home = () => {
return (
    <section id='home' style={{ backgroundImage: `url(${Entrada})` }}>
        <h1>Oficina Especializada</h1>
        <p>Stuttgart motors oferece atendimento a carros</p>
    </section>
)
}

export default Home;