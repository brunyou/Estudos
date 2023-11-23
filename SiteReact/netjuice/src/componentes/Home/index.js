
import Onda from '../Onda'
import './Home.css'

const Home = () =>{
    return (
        <div className ='home'>
            <h1>Bem vindo!</h1>
            <h2>O que você precisa <span>hoje?</span></h2>
            <div id='container'> <Onda/> </div>
        </div>
    )
}

export default Home