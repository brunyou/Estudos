import './NavBar.css'
import '../NavButton'
import NavButton from '../NavButton'

const NavBar = () => {
    return(
        <div className = 'navbar'>
            <NavButton href='#home' nome='Home'/>
            <NavButton href='#servicos' nome='Serviços'/>
            <NavButton href='#contato' nome='Contato'/>
        </div>
    )
}

export default NavBar