import React,{useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import {AiOutlineHeart,AiFillHeart,AiFillStar} from"react-icons/ai"
import { MyContext } from '../UserContext';

const Card_box = styled.div`
    overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  background-color: ${props=>props.theme.colors.light};
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 40px;
  color: ${props=>props.theme.colors.dark};


  #zoomImg{
    cursor: zoom-in;
    object-fit: cover;
    width: 500px;
    height: 500px;
    /* transform: translate(-90%,90%) !important; */
    transition: .1s;
  }
  #zoom{
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /* border: 1px solid black; */
    box-shadow: 1px 1px 5px 0px  #b3b3b3;
    width: 500px;
    height: 500px;
    
  }
  .title{
    font-size: 18px;
  }
  .price{
    font-size: 20px;
    font-weight: bold;
    color: #d40000;
  }
  .heart{
    cursor: pointer;
    position: relative;
    display: flex;
    width: 25px;
    height: 25px;
    transform: translate(10px,-35px);
    color: #fd3737;
    
  }
  
  @media only screen and (max-width: 700px) {
    img {
    width: 340px !important;
    height: 340px  !important;
    }
    div{
      width: 340px !important;
      height: 340px  !important;
    }
    .title{
      margin-top: 5px;
      font-size: 13px;
  }
    .price{
      font-size: 15px;
      font-weight: bold;
    }
    .heart{
    cursor: pointer;
    scale: 0.9;
    position: relative;
    transform: translate(-10px,-52px);
    color: #fd3737;
  }

}
`
const Box_info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    .box_simple{
        display: flex;
        align-items: center;
        color: #be0202;
        margin-top: 5px;
        margin-bottom: 5px;
        span {
            margin-left: 5px;
        }
    }
    .title{
        font-size: 25px;
        max-width: 420px;
    }
    .price{
    }
    .color{
    }
    button{
        border: none;
        background-color: #be0202;
        color:white;
        border-radius: 5px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .Description_title{
        font-size:16px;
    }
    .Description{
        font-size:12px;
        text-align: justify;
        max-width: 420px;
    }
  
    
`

export default function ProductBanner({ item }) {
       
  const {favoriteProducts,
    setFavoriteProducts,
    cartProducts,
    setCartProducts,
    products,
    setProducts} = useContext(MyContext)

    const navigate = useNavigate()

    function handleLike(id){
      setProducts(prevProducts => prevProducts.map(item => {
        if(item.nanoid === id){
          return ({
            ...item,
            favorite:!item.favorite
          })
        }else{
          return item
        }
      }))
      // console.log('like')
    }

    function handleProduct(id){
      console.log(id)
      navigate(`/Product?q=${id}`)
    }

    function handleClick(id){
      setProducts(prevProducts => prevProducts.map(item => {
        if(item.nanoid === id){
          return ({
            ...item,
            inTheCart:!item.inTheCart
          })
        }else{
          return item
        }
      }))
    }

// console.log(cartProducts)

    useEffect(()=>{
    let zoom = document.getElementById("zoom")
    let zoomImg = document.getElementById("zoomImg")
    zoom.addEventListener("mousemove",handleMove)
    zoom.addEventListener("mouseleave",handleLeave) 
    function handleMove(e){
        const {clientX:x , clientY:y} = e;
        let coordX = (zoom.offsetWidth - x)/2
        let coordY = (zoom.offsetHeight - y)/2
        zoomImg.style.transform = `translate(${coordX + 100}px,${coordY - 50}px) scale(1.5)`
    }
    function handleLeave(e){
        zoomImg.style.transform = `translate(0px,0px) scale(1)`
    }
    })

    

  return (
    
      <Card_box className='box'>
        <div>
                <div id="zoom">
                    <img id="zoomImg" onClick={()=>handleProduct(item.nanoid)} src={item.image}/>
                </div>

            <div onClick={()=>handleLike(item.nanoid)} className='heart' >
            {item.favorite ? <AiFillHeart size={25}/> : <AiOutlineHeart size={25}/>}
            </div>
        </div>

        <Box_info>
            <span className='title'>{item.title}</span>
            <span className='price'>€{(item.price).toFixed(2)}</span>
            <span className='color'><strong>colors</strong> : {(item.color).join(" | ")}</span>

            <button onClick={()=>handleClick(item.nanoid)}>
                { item.inTheCart === true ?
                    "REMOVE FROM CART" :
                    "ADD TO CART"
                }
                
                </button>

                <div className='box_simple'>
                {item.rating.rate >= 1 && <AiFillStar/>}
                {item.rating.rate >= 2 && <AiFillStar/>}
                {item.rating.rate >= 3 && <AiFillStar/>}
                {item.rating.rate >= 4 && <AiFillStar/>}
                {item.rating.rate === 5 && <AiFillStar/>}
                <span className='Reviews'>{item.rating.rate}</span>
                </div>
            <span className='Description_title'>Description</span>
            <span className='Description'>{item.description}</span>
            <span className='Materials'><strong>Materials</strong> : {(item.materials).join(" | ")}</span>


        </Box_info>
          

      </Card_box>

  )
}




// let zoom = document.getElementById("zoom")
// let zoomImg = document.getElementById("zoomImg")

// zoom.addEventListener("mousemove",handleMove)
// zoom.addEventListener("mouseleave",handleLeave)

// function handleMove(evento){

//     console.log(evento)

//     const {clientX:x , clientY:y} = evento;

//     let coordX = (zoom.offsetWidth - 2*x)/2
//     let coordY = (zoom.offsetHeight - 2*y)/2.2

//     zoomImg.style.transform = `translate(${coordX}px,${coordY}px) scale(1.8)`
// // }

// function handleLeave(e){
//     zoomImg.style.transform = `translate(0px,0px) scale(1)`
// }

