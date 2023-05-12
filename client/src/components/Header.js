import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav>
                <ul className='header'>
                    <li><NavLink to='/'>One</NavLink></li>
                </ul>
            </nav>
        </div >
    )
}

export default Header;