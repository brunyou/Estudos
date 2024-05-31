import Logo from "../../img/logo.png"
import '../NavBar/Navbar.css'
import React,{useState} from "react"
import {Link,NavLink} from "react-router-dom"

const NavBar = () => {
    const[menuOpen, setMenuOpen] = useState(false)

    return(
        <nav id='navbar'>
            <Link id='logo'><img src={Logo} alt='Logo Stuttgart' className='logo'></img></Link>
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/sobre">SOBRE NÓS</NavLink></li>
                <li><NavLink to="/servicos">SERVIÇOS</NavLink></li>
                <li><NavLink to="/contatos">CONTATOS</NavLink></li>
                <li><NavLink to="/cursos">CURSOS</NavLink></li>
            </ul>
            
        </nav>
    )
}

export default NavBar;