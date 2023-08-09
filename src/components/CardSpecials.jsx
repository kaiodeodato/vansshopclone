import React,{ useContext} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {AiOutlineHeart,AiFillHeart} from"react-icons/ai"
import { MyContext } from '../UserContext';

const Card_box = styled.div`
  background-color: ${props=>props.theme.colors.liht};
  color: ${props=>props.theme.colors.dark};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  border-radius: 5px;
  margin-top: 20px;

  img {
    margin: 20px;
    width: 450px;
    height: 450px;
    box-shadow: 1px 1px 5px 0px  #b3b3b3;
    transition: .3s;
    border-radius: 2px;
  }
  img:hover {
    scale:1.01;
    box-shadow: 1px 1px 10px 0px  #b3b3b3;
  }
  .title{
    display: flex;
    font-size: 24px;
    text-align: center;
   

  }
  .sentence{
    display: flex;
    font-size: 18px;
    width: 350px;
    text-align: center;
    justify-content: center;


  }
  @media only screen and (max-width: 700px) {
    
    img {
    width: 120px;
    height: 120px;
    }
    .title{
      margin-top: 5px;
      font-size: 11px;
      font-weight: bold;
  }
    .sentence{
      font-size: 10px;
      width: 160px;
    }
}
`
export default function CardSpecials({ item }) {
       
  const {favoriteProducts,
    setFavoriteProducts,
    cartProducts,
    setCartProducts,
    products,
    setProducts} = useContext(MyContext)






  return (
    
      <Card_box className='box'>

        {item.url !== "" && <a href={item.url} target="_blank">
            <img src={item.image}/>
        </a>}
     
        {item.title === "SHOES" && 
        <Link to="Shoes/" ><img src={item.image}/></Link> 
        }  
        {item.title === "CLOTHES" && 
        <Link to="Clothes/" ><img src={item.image}/></Link> 
        }           

          <span className='title'>{item.title}</span>
          <span className='sentence'>{item.sentence}</span>
          <div className='heart' >
          </div>

      </Card_box>

  )
}

{/* <Link style={Link_style} to="Shoes/"><Title_1>Shoes</Title_1></Link>
<Link style={Link_style} to="Clothes/"><Title_1>Clothes</Title_1></Link> */}