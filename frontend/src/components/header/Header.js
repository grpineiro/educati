// Create a new Header component that renders the header of the app and the navigation links

import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Container fixed={true}>
             <header className="header">
        <div className="header__logo">
            <h1>
            <Link to="/">
                {/* <img  alt="logo" /> */}
            </Link>
            </h1>
        </div>
        <nav className="header__nav">
            <ul className="header__nav-list">
            <li className="header__nav-item">
                <Link to="/">Home</Link>
            </li>
            <li className="header__nav-item">
                <Link to="/about">Perfil</Link>
            </li>
            <li className="header__nav-item">
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </nav>
        </header>
        </Container>
       
    );
};

export default Header;