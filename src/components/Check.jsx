import React,{ useContext, useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {FiShoppingCart} from"react-icons/fi"
import { MyContext } from '../UserContext';

const Box = styled.div`
    z-index: 2;
    cursor: pointer;
    color: #9e0202;
    background-color: #d60303;
    border-left: 0px;
    border-style: dashed ;
    top: 250px;
    padding-top: 6px;
    width: 230px;
    height: 300px;
    position: fixed;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 0px 3px 3px 0px ;
    transition: .3s;
    box-shadow: 1px 2px 6px #494949d3;
    transform: translateX(-205px);

    .top{
        position: absolute;
        top: 5px;
    }
    .bottom{
        position: absolute;
        bottom: 5px;
    }
    .listCheck{
        width: 180px;
        height: 240px;
        background-color: #c70404ce;
        box-shadow: inset 0px 0px 6px 0px #a30000;
        display: flex;
        flex-direction: column;
        scroll-behavior: smooth;
        overflow-y: auto;
    }
    .vertical{
        position: absolute;
        font-size:18px;
        rotate: -90deg;
        transform: translateY(95px);
        color: #ffffffc1;
    }

    .listCheck::-webkit-scrollbar{
        display: none;
    }

    span{
        font-size: 13px;
        margin-left: 15px;
    }
`

export default function Check() {

    const {favoriteProducts,
        setFavoriteProducts,
        cartProducts,
        setCartProducts,
        products,
        setProducts} = useContext(MyContext)

        useEffect(()=>{

            let box = document.getElementById("box")
    
            box.addEventListener("mouseenter",handleMouseEnter)
            box.addEventListener("mouseleave",handleMouseLeave)
    
            function handleMouseEnter(){
                box.style.transform = "translateX(0px)"
            }
            function handleMouseLeave(){
                box.style.transform = "translateX(-205px)"
            }
        })

        function Shortener(str){
            return str.slice(0,17)
        }

        function printElements(){
           let ArrayCheck = cartProducts.map(item => {
            return (
                <span key={item.nanoid} style={{color:"white"}}>{Shortener(item.title)} . . . </span>
            )
           })
           return ArrayCheck
        }

        const CheckElements = printElements()

  return (
    <Link to="Cart/">
        <Box id="box">
        <span className='top' style={{color:"white"}}>List of Items</span>
            <div className='listCheck'>
                {CheckElements}
            </div>
            <span className='bottom' style={{color:"white"}}>{cartProducts.length} items</span>
            <span className='vertical' >IN THE CART</span>

        </Box>
        
    </Link>
  )
}
