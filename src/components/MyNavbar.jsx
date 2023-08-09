import React,{useContext} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoVans from '../components/images/VansCloneLogo.png'
import {FiShoppingCart} from"react-icons/fi"
import {AiOutlineHeart,AiFillHeart} from"react-icons/ai"
import { MyContext } from '../UserContext'

const Title_1 = styled.h3`
    cursor: pointer;
    color: ${props => props.theme.colors.dark};
    display: flex;
    align-items: center;
    font-size: 20px;
    margin: 5px;
    transition: .2s;
    
    img{
        filter: drop-shadow(1px 1px 3px white);
    }

    &:hover{
        color: #8d1703;
    }
`
const Span_1 = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    margin-left: 8px;
    background-color: #dbdbdb;
    color: #494949;
    border-radius: 50%;
    width: 20px;
    height: 20px;

`

const Link_style = {
    textDecoration: "none",
}
const shadow = {
    boxShadow: "0px 0px 10px #8a8a8a",
}

export default function MyNavbar() {
   
    const {favoriteProducts,setFavoriteProducts,cartProducts,setCartProducts} = useContext(MyContext)


    // console.log(cartProducts)
    
  return (
    <div>
        <Navbar style={shadow} expand="md" >
            <Container>
                <Navbar.Brand className='p-0' >
                    <Link  to="/"><Title_1>
                        <img src={LogoVans} width="100px"/>
                    </Title_1></Link> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-nav"/>
                <Navbar.Collapse  id="basic-nav">
                    <Nav className='ms-auto' >
                        <Link style={Link_style} to="Favorites/"><Title_1>
                            {favoriteProducts.length > 0 && 
                            <span style={{color:"#777",fontSize:"15px"}} >{favoriteProducts.length}</span>}
                            {favoriteProducts.length == 0 ? 
                            <AiOutlineHeart color='red' size={19}/> : 
                            <AiFillHeart color='red' size={19}/>}
                            Favorites
                        </Title_1></Link>
                        <Link style={Link_style} to="/"><Title_1>Home</Title_1></Link>
                        <Link style={Link_style} to="Shoes/"><Title_1>Shoes</Title_1></Link>
                        <Link style={Link_style} to="Clothes/"><Title_1>Clothes</Title_1></Link>
                        {/* <Link style={Link_style} to="Product/"><Title_1>Product</Title_1></Link> */}
                        <Link style={Link_style} to="Cart/">
                            <Title_1>
                                <FiShoppingCart size={25}/>
                                {cartProducts.length > 0 && <Span_1>{cartProducts.length}</Span_1>}
                            </Title_1>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
