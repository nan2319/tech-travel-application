import React, { useContext} from "react";
import CartContext from "../../context/cart";
import {Link} from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import{Container, HeaderContainer, Cart} from '../Header/styles';

function Header(){
    const {setState, state}=useContext(CartContext);
    const totalQuantity =state.cart.reduce(
        (acc, travel)=> acc+ travel.quantity,
    0,
    );
    return (
    <Container>
        <HeaderContainer>
            <Link to='/'>
            <img src={logo} alt='logo' />
            </Link>
            <Link to='/cart'>
            <Cart>
                <div>
                    <span>{totalQuantity}</span>
                </div>
                <FaShoppingCart size={36} color="#fff"/>

            </Cart>
            </Link>
            
        </HeaderContainer>
    </Container>
    )
}

export default Header;