import './NavButton.css'

const NavButton = (props) => (
    <a className='link' href={props.link} > {props.NomeLink}</a>
)

export default NavButton