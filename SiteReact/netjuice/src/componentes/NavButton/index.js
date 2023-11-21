import './NavButton.css'

const NavButton = (props) => {
    return(
            <a className='navbutton' href={props.href}>{props.nome}</a>
        )
}

export default NavButton