import React from 'react';

function ButtonLink(props) {
    //props => { className: "nome da classe" , href: "/" }
    return (
        <a href={props.href} className={ props.className }>
            { props.children }
        </a>
    );
}

//Usa-se da seguinte maneira
/*
    <ButtonLink className="ButtonLink" href="/">
        Novo Vídeo //children
    </ButtonLink>
*/

export default ButtonLink;