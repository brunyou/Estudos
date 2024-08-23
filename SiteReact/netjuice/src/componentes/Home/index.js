
import Onda from '../Onda'
import './Home.css'

const Home = () =>{
    return (
        <section id='home' className='home' >
            <section className='content' >
                <h1 data-aos="fade-left">Olá, tudo bem? <br/>
                Me chamo Bruno Pereira</h1>
                <p data-aos="fade-left">Desenvolvedor front-end e DBA </p>
             
            </section>
             <Onda cor='#0099ff' id="onda"/>
        </section>
    )
}

export default Home