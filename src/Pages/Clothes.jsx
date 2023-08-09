import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container'
import Banner from '../components/Banner';
import CardProduct from '../components/CardProduct';
import { MyContext } from '../UserContext';
import styled from 'styled-components'
import RedBlackTripes from '../components/RedBlackTripes';

const ContainerProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:center;
  position: relative;
  top: 25px;
`

export default function Clothes() {

  const {favoriteProducts,
    setFavoriteProducts,
    cartProducts,
    setCartProducts,
    products,
    setProducts} = useContext(MyContext)

    function getElements(){
      let ArrayProducts = products.map(item => {
        if(item.category === "Clothes")
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
