import React, {useContext, useState} from 'react';
import CartContext from '../../context/cart';
import {Container, ContainerList, TravelItem, Info, Quantity, Subtotal, Total} from './styles';
import {MdDelete} from 'react-icons/md'


function Cart(){
    const{state, setState} = useContext(CartContext);
   
    
    const data = [...state.cart];
    const t= data.map(id=>id.subtotal).reduce((prev, curr)=> prev + curr, 0);
    

    return(
<Container>
    <ContainerList>
        {state.cart.map((el)=>(
    <TravelItem key={el.id}>
        <img src={el.photo} alt={el.title}/>
        <Info>
            <p>{el.title}</p>
            <strong>${el.price}</strong>

        </Info>
        <Quantity  readOnly type="number" value={el.quantity}/>
        <Subtotal>
            <p>${el.subtotal}</p>
            <button type='button'>
                <MdDelete size={24} color="#0676d9" />
            </button>
        </Subtotal>
        </TravelItem>
           ))}
           <Total>
               <p>TOTAL</p>
               <strong>${t}</strong>
           </Total>
        </ContainerList>
    </Container>
    
    );
}

export default Cart;