import './NavBar.css'
import NavButton from '../NavButton'
import React, { useState, useEffect } from "react"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen &&!event.target.closest('#navbar')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [menuOpen])

  return (
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