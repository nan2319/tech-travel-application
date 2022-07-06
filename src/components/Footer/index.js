import React from "react";
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import{Container,FooterContainer} from '../Footer/styles';

function Footer(){

    return (
    <Container>
        <FooterContainer>
            <Link to='/'>
            <img src={logo} alt='logo' />
            </Link>
            <ul>
                <li>
                <Link to='/aviso de privacidad'>
                    Aviso de privacidad
                </Link>
                </li>
                <li>
                    <a href="https://www.google.com/">Google</a>
                </li>
                
            </ul>
        </FooterContainer>
    </Container>
    );
}

export default Footer;