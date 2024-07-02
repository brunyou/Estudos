import './NavBar.css'
import NavButton from '../NavButton'
import React,{useState} from "react"


const NavBar = () => {
        <div className = 'navbar'>
            <NavButton href='#home' nome='Home'/>
            <NavButton href='#servicos' nome='Serviços'/>
            <NavButton href='#contato' nome='Contato'/>
        </div>
                <span></span>
            </div>
                    <section className={menuOpen ? "open" : ""}>
                    <NavButton href='#home' nome='Home' />
                    <NavButton href='#servicos' nome='Serviços' />
                    <NavButton href='#contato' nome='Contato' />
                    </section>
                </nav>
    )
}





export default NavBar