import React,{useContext} from 'react'
import styled from 'styled-components';
import { MyContext } from '../UserContext';
import { Container } from 'react-bootstrap';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"
import { useNavigate } from 'react-router-dom';

const Box_slide = styled.div`
    position: relative;
    top: 20px;
    width: 100%;
    overflow-x: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;

    .slide{
        scroll-behavior: smooth;
    width: 100%;
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    align-items: center;
    }
    .slide::-webkit-scrollbar{
        display: none;
    }

    &::-webkit-scrollbar{
        display: none;
    }

    .arrows{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        width: 100%;

    }
    .icone_left{
        cursor: pointer;
        position: relative;
        z-index: 3;
        top: 105px;
        filter: drop-shadow(1px 1px 2px white);
        color: #d60000;
    }
    .icone_right{
        cursor: pointer;
        position: relative;
        z-index: 3;
        top: 105px;
        filter: drop-shadow(1px 1px 2px white);
        color: #d60000;
    }

    img{
        width: 200px;
        height: 200px;
        cursor: pointer;
        transition: .2s;
    }
    img:hover{
        scale: 1.03;
    }
`

export default function Slide() {

    const navigate = useNavigate()

    const {favoriteProducts,
        setFavoriteProducts,
        cartProducts,
        setCartProducts,
        products,
        setProducts} = useContext(MyContext)

    function getElements(){
        let ArrayProducts = products.map(item => {
            if(item.category === "Shoes")
            return(
                <img 
                onClick={()=>handleProduct(item.nanoid)}
                key={item.nanoid} 
                src ={item.image}
                />

            )
        })
        return ArrayProducts
        }
        
        const ProductsElements = getElements()
          
        function handleClick(side){
            if(side === "left"){
                let slider = document.getElementById("box_slide");
                slider.scrollLeft = slider.scrollLeft - 500
            }else if(side === "right"){
                let slider = document.getElementById("box_slide");
                slider.scrollLeft = slider.scrollLeft + 500
            } 
        }

        function handleProduct(id){
                navigate(`/Product?q=${id}`)
              }


  return (
        <Container>
            <Box_slide  className='box_slide'>
                <div className='arrows'>
                    <IoIosArrowDropleftCircle onClick={()=>handleClick("left")} className='icone_left'  size={35}/>
                    <IoIosArrowDroprightCircle onClick={()=>handleClick("right")} className='icone_right' size={35}/>
                </div>
                <div id='box_slide' className='slide'>
                    {ProductsElements}
                </div>

            </Box_slide>
        </Container>
   
  )
}



// function handleProduct(id){
//     console.log(id)
//     navigate(`/Product?q=${id}`)
//   }
// onClick={()=>handleProduct(item.nanoid)}