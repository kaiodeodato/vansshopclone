import React,{useState,useEffect} from 'react';
import { Routes,Route } from 'react-router-dom';
import styled, {ThemeProvider , createGlobalStyle} from 'styled-components';
import firstTheme from './theme'
import { MyContext } from "./UserContext.js"
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Shoes from './Pages/Shoes';
import Clothes from './Pages/Clothes';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import { nanoid } from 'nanoid';
import TagCart from './components/TagCart';
import Check from './components/Check';


const GlobalStyle = createGlobalStyle`
  html,body {
    background-color: ${props => props.theme.colors.light} !important;
    font-family: 'Karla', sans-serif
  }
`
const Image = styled.img`
    width: 200px;
    margin: 5px;
`
const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    flex-direction: row;
`
const Span_1 = styled.span`
  position: absolute;
  z-index: 1;
  color: ${props => props.theme.colors.dark};
  margin-top: 15px;
  margin-left: -50px;
  font-size: 20px;
  font-weight: bold;
`

function App() {

  const [colorsTheme,setColorsTheme] = useState(firstTheme)

  const [favoriteProducts,setFavoriteProducts] = useState([])
  const [cartProducts,setCartProducts] = useState([])
  const [products,setProducts] = useState([])

 
  useEffect(()=>{
    const productsURL = 'https://gist.githubusercontent.com/kaiodeodato/c097f941bf546b467d7dc09cbcc48420/raw/96dba474c7ea02fa034ee95eff44fce9f943a7a2/data.json'
    
    getAPI(productsURL,setProducts)
    
  },[])


  useEffect(()=>{
    searchForFavorites()
    searchForCartItems()
    if(products.length > 0){
      localStorage.setItem('salvedItems', JSON.stringify(products));
    }
  },[products])

function getAPI(url,set){
if(localStorage.getItem('salvedItems') === null){
    fetch(url)
    .then(res => res.json())
    .then(data => data.map(item => {
      return ({
        ...item,
        nanoid: nanoid(),
        favorite:false,
        inTheCart:false
      })
    }))
    .then(json => set(json))
  }else{
   let salvedData = localStorage.getItem('salvedItems')
   setProducts(JSON.parse(salvedData))
  }
  }
  
  function searchForFavorites(){
    let ArrayFavorites = products.filter(item => {
      if(item.favorite === true){
        return item
      }
    })
    setFavoriteProducts(ArrayFavorites)
  }

  function searchForCartItems(){
    let ArrayInTheCart = products.filter(item => {
      if(item.inTheCart === true){
        return item
      }
    })
    setCartProducts(ArrayInTheCart)
  }

// console.log(products)

function getElements(){
  let ArrayProducts = products.map(item => {
    return(
      <div key={item.nanoid}>
        <Image key={item.id} src={item.image}></Image>
        <Span_1>£{item.price}</Span_1>
      </div>
    )
  })
  return ArrayProducts
}

const ProductsElements = getElements()



  return (
    <ThemeProvider theme={colorsTheme}>
      <GlobalStyle/>
      <div className="App">
        <MyContext.Provider value={{favoriteProducts,setFavoriteProducts,cartProducts,setCartProducts,products,setProducts,colorsTheme,setColorsTheme}}>
          <MyNavbar/>
          <TagCart/>
          <Check/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="Favorites/" element={<Favorites/>} />
            <Route path="Shoes/" element={<Shoes/>} />
            <Route path="Clothes/" element={<Clothes/>} />
            <Route path="Cart/" element={<Cart/>} />
            <Route path="Product/" element={<Product/>} />
          </Routes>
          <Footer/>
        </MyContext.Provider>
      </div>

    </ThemeProvider>
  );
}

export default App;








// import { Link, useNavigate } from "react-router-dom"
//   const navigate = useNavigate();

//   navigate(`/search?q=${searchWord}`)