
import Onda from '../Onda'
import './Home.css'

const Home = () =>{
    return (
        <section className ='home'>
            <section className='content'>
                <h1>Bem vindo!</h1>
                <h2>O que você precisa <span>hoje?</span></h2>
            </section>
            <section id='container'> <Onda/> </section>
        </section>
    )
}

export default Home