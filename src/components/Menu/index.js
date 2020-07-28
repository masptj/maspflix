import React from 'react';
// import Logo from '../../assets/img/LogoMain.svg'
import Logo from '../../assets/img/MaspFlix.png'
// import ButtonLink from '../components/ButtonLink'
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="MaspFlix Logo" />
            </a>

            //Componente não styled
            {/* <ButtonLink className="ButtonLink" href="/">
                Novo Video
            </ButtonLink> */}

            //Componente styled
            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>

        </nav>
    );
}

export default Menu;