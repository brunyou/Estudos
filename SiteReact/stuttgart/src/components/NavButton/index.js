import './Navbutton.css'

const NavButton = (props) => {
    return(
        <div>
            <a className='navbutton' href={props.href}>{props.nome}</a>
        </div>
    )
};

export default NavButton;