import Logo from "../../img/logo.png"
import '../NavBar/Navbar.css'
import NavButton from "../NavButton"

const NavBar = () => {
    return(
        <div id='navbar'>
            <img src={Logo} alt='Logo Stuttgart' className='logo'></img>
            <section>
                <NavButton href='#' nome='SOBRE NÓS'/>
                <NavButton href='#' nome='SERVIÇOS'/>
                <NavButton href='#' nome='CONTATOS'/>
            </section>
            
        </div>
    )
}

export default NavBar;