import { NavLink } from "react-router-dom"

function Header({text}) {
    return (
        <header>
            <div className="container">
                <NavLink to='/'>Home</NavLink>
                <NavLink  to='/about'>About</NavLink>
            </div>
        </header>
    )
}

export default Header
