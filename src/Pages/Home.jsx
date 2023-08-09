import React,{useState,useEffect,useContext} from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Banner from '../components/Banner';
import CardSpecials from '../components/CardSpecials';
import { MyContext } from '../UserContext';
import RedBlackTripes from '../components/RedBlackTripes';
import Slide from '../components/Slide';

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Box = styled.div`
  position: relative;
  top: 20px;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

`


export default function Home() {

  const [specials,setSpecials] = useState([])
   const {favoriteProducts,
    setFavoriteProducts,
    cartProducts,
    setCartProducts,
    products,
    setProducts} = useContext(MyContext)

  useEffect(()=>{
    const specialsURL = 'https://gist.githubusercontent.com/kaiodeodato/6455bcafaf55d75ba2eab49d5674df50/raw/7cab1419cd8f71a119fd0904eaddbbc219c22948/CardSpecials.json'

    getAPI(specialsURL,setSpecials)
  },[])

  function getAPI(url,set){
    fetch(url)
    .then(res=>res.json())
    .then(json=>set(json))
    }

      // console.log(specials)
     
  function getElements(){
    let ArrayProducts = specials.map(item => {
      return(
        <CardSpecials 
        key={item.id}
        item={item}
        />
      )
    })
    return ArrayProducts
  }
  
  const ProductsElements = getElements()

  

  return (
    <BoxContainer>
      <RedBlackTripes/>
        <Container>
            <Banner/>
            <Slide/>
            <Box>
             {ProductsElements}
            </Box>            
        </Container>
    </BoxContainer>
  )
}
