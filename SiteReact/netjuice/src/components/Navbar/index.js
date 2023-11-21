import './Navbar.css'
import NavButton from '../Navbutton';

const Navbar = () => {
    return(
        <header className='navbar'>
            <NavButton link = '#' NomeLink = 'Home'/>
            <NavButton link = '#' NomeLink = 'Serviços'/>
            <NavButton link = '#' NomeLink = 'Sobre'/>
            <NavButton link = '#' NomeLink = 'Contato'/>
        </header>
    )
}

export default Navbar