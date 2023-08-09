import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container'
import Banner from '../components/Banner';
import { MyContext } from '../UserContext';
import { useSearchParams } from 'react-router-dom'
import ProductBanner from '../components/ProductBanner';
import RedBlackTripes from '../components/RedBlackTripes';



export default function Product() {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")
  const {favoriteProducts,
    setFavoriteProducts,
    cartProducts,
    setCartProducts,
    products,
    setProducts} = useContext(MyContext)
  
  function getElements(){
    let ArrayProducts = products.map(item => {
      if(item.nanoid === query)
      return(
        <ProductBanner 
        key={item.id}
        item={item}
        />
      )
    })
    return ArrayProducts
  }
  
  const ProductsElements = getElements()



  return (
    <div>
      <RedBlackTripes/>
        <Container>
          <Banner/>
          <br />
            {ProductsElements}
        </Container>
    </div>
  )
}




