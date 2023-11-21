import './NavBar.css'
import '../NavButton'
import NavButton from '../NavButton'

const NavBar = () => {
    return(
        <div className = 'navbar'>
            <NavButton href='#' nome='Home'/>
            <NavButton href='#' nome='Serviços'/>
            <NavButton href='#' nome='Sobre'/>
            <NavButton href='#' nome='Contato'/>
        </div>
    )
}

export default NavBar