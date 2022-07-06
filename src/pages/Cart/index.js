import React, {useContext, useState} from 'react';
import CartContext from '../../context/cart';
import {Container, ContainerList, TravelItem, Info, Quantity, Subtotal, Total} from './styles';
import {MdDelete} from 'react-icons/md'


function Cart(){
    const{state, setState} = useContext(CartContext);
   
    
    const data = [...state.cart];
    var t= data.map(id=>id.subtotal).reduce((prev, curr)=> prev + curr, 0);

function handleDeleteCart(travel){
    var sub=0;
    const travelIndex = data.findIndex((el) => el.id === travel.id);
    data[travelIndex].quantity-=1;
    
    if (data[travelIndex].quantity === 0){
        data.splice(travelIndex, 1);
    }else{
        sub = travel.price * travel.quantity;
        data[travelIndex].subtotal=sub;
        console.log (data);
        console.log(sub);
    }
        
        setState({
            cart:data,
        });
    }

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
            <button type='button' onClick={()=>handleDeleteCart(el)}>
                <MdDelete size={24} color="#0676d9" />
            </button>
        </Subtotal>
        </TravelItem>
           ))}
           <Total>
               <p>TOTAL</p>
               <strong>${t.toFixed(2)}</strong>
           </Total>
        </ContainerList>
    </Container>
    
    );
}

export default Cart;