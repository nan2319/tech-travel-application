import React, { useEffect, useState, useContext } from 'react';
import CartContext from '../../context/cart';
import { MdAddShoppingCart } from 'react-icons/md'

import {Container, List, Unit} from './styles';
import api from '../../services/api';

function Home(){
    const [travelList, setTravelList ]= useState([]);
    const {state, setState}= useContext(CartContext);

    useEffect(()=>{
        async function getTravelList(){
            const {data} = await api.get('/travels');
           
            setTravelList(data);
        }
        getTravelList();
    },[]);

function handleAddToCart(travel){
    const copyCart =[...state.cart];
    const travelIndex = copyCart.findIndex((el)=>el.id === travel.id);
    var sub =0;
    
    if(travelIndex>=0){
        if (copyCart[travelIndex].quantity += 1){
            sub=copyCart[travelIndex].price * copyCart[travelIndex].quantity;
            copyCart[travelIndex].subtotal = sub;
        } 
        
    }else{
            sub=travel.price *1;
        
            copyCart.push({...travel, quantity: 1, subtotal: sub});
     
    }
    
    
    setState({
        cart:copyCart, 
    });
    
    console.log(copyCart);
   
}

    return(
    <Container>
        <List>
            {travelList.map((el)=>(
        
            <Unit key={el.id}>
                <img src={el.photo} alt="Travel" />
                <p>{el.title}</p>
                <strong>${el.price}</strong>

                <button type='button' onClick={()=>handleAddToCart(el)}>
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>
                    <span>Agregar al carrito</span>
                </button>
            </Unit>
            ))}
        </List>
        
    </Container>
    )
}

export default Home;
