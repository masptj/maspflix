import React from 'react';
// import Logo from '../../assets/img/LogoMain.svg'
import Logo from '../../assets/img/MaspFlix.png'
// import ButtonLink from '../components/ButtonLink'
import { Link } from 'react-router-dom';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="MaspFlix Logo" />
            </Link>

            //Componente não styled
            {/* <ButtonLink className="ButtonLink" href="/">
                Novo Video
            </ButtonLink> */}

            //Componente styled
            <Button as={ Link } className="ButtonLink" to="/cadastro/video/">
                Novo Video
            </Button>

        </nav>
    );
}

export default Menu;