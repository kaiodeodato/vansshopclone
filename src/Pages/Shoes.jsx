import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container'
import Banner from '../components/Banner';
import CardProduct from '../components/CardProduct';
import { MyContext } from '../UserContext';
import styled from 'styled-components'
import RedBlackTripes from '../components/RedBlackTripes';

const ContainerProducts = styled.div`
  position: relative;
  top: 25px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:center;
`

export default function Shoes() {

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
          <CardProduct 
          key={item.id}
          item={item}
          />
        )
      })
      return ArrayProducts
    }
    
    const ProductsElements = getElements()
    
    // console.log(products)


  return (
    <div>
      <RedBlackTripes/>
        <Container>
            <Banner/>
            <ContainerProducts>
           {ProductsElements}
          
            </ContainerProducts>
        </Container>
    </div>
  )
}
