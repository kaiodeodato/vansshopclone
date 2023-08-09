import React,{ useContext} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import {AiOutlineHeart,AiFillHeart} from"react-icons/ai"
import { MyContext } from '../UserContext';

const Card_box = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props=>props.theme.colors.light};
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 40px;
  img {
    width: 300px;
    height: 300px;
    box-shadow: 1px 1px 5px 0px  #b3b3b3;
    transition: .3s;
  }
  img:hover {
    scale:1.03;
    box-shadow: 1px 1px 10px 0px  #b3b3b3;
  }
  .title{
    font-size: 18px;
    color: ${props=>props.theme.colors.dark};;
  }
  .price{
    font-size: 20px;
    font-weight: bold;
    color: #d40000;
  }
  .heart{
    cursor: pointer;
    position: absolute;
    transform: translate(-130px,100px);
    color: #fd3737;
  }
  @media only screen and (max-width: 700px) {
    img {
    width: 150px;
    height: 150px;
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
      transform: translate(-90px,55px);
      scale: 0.7;
    }
}

`
export default function CardProduct({ item }) {
       
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

  return (
    
      <Card_box className='box'>
     
          <img onClick={()=>handleProduct(item.nanoid)} src={item.image}/>
          <span className='title'>{item.model}</span>
          <span className='price'>€{(item.price).toFixed(2)}</span>
          <div onClick={()=>handleLike(item.nanoid)} className='heart' >
          {item.favorite ? <AiFillHeart size={25}/> : <AiOutlineHeart size={25}/>}
          </div>

      </Card_box>

  )
}

