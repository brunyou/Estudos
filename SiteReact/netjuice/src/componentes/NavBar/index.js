import './NavBar.css'
import NavButton from '../NavButton'
import React,{useState} from "react"


const NavBar = () => {
    const[menuOpen, setMenuOpen] = useState(false)

        return(
            <nav id='navbar'>
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
                    <section className={menuOpen ? "open" : ""}>
                    <NavButton href='#home' nome='Home' />
                    <NavButton href='#servicos' nome='Serviços' />
                    <NavButton href='#contato' nome='Sobre' />
                    </section>
                </nav>
    )
}





export default NavBar