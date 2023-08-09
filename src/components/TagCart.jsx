import React,{ useContext} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {FiShoppingCart} from"react-icons/fi"
import { MyContext } from '../UserContext';

const Box = styled.div`
    z-index: 2;
    cursor: pointer;
    color: #9e0202;
    background-color: #d60303;
    border-right: 0px;
    border-style: dashed ;
    top: 300px;
    padding-top: 6px;
    width: 40px;
    height: 60px;
    position: fixed;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 3px 0px 0px 3px ;
    transition: .2s;
    box-shadow: 1px 2px 6px #494949d3;

    &:hover{
        transform: translateX(5px);
    }

`

export default function TagCart() {

    const {favoriteProducts,
        setFavoriteProducts,
        cartProducts,
        setCartProducts,
        products,
        setProducts} = useContext(MyContext)

  return (
    <Link to="Cart/">
        <Box>
            <FiShoppingCart color='white' size={20}/>
            <span style={{color:"white"}}>{cartProducts.length}</span>
        </Box>
    </Link>
  )
}
