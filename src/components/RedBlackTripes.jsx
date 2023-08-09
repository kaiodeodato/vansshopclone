import React,{useState,useEffect,useContext} from 'react'
import styled from 'styled-components'
import { MyContext } from '../UserContext'
import firstTheme from '../theme'
import Form from "react-bootstrap/Form"
import { Row,Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Box = styled.span`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 27px;
    color: ${props=>props.theme.colors.dark};


    #custom-switch{
        position: absolute !important;
        background-color: #9b9b9b !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border: none;
    }
`
const RedStripe = styled.span`
    font-size: 14px;
    position: relative;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #d60000;
    width: 100%;
    height: 27px;
    color: white;
`
const BlackStripe = styled.span`
    font-size: 14px;
    position: relative;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${props=>props.theme.colors.dark};
    width: 100%;
    height: 27px;
    color: ${props=>props.theme.colors.light};

   
`

const DarkTheme = {
    colors: {
        primary: '#11A2D7',
        secondary: '#e45c01',
        dark: '#ffffff',
        light: '#05001b'
    }
  }

export default function RedBlackTripes() {

    const [colorsmode,seColorsode] = useState("Dark-Mode")

    const {favoriteProducts,
        setFavoriteProducts,
        cartProducts,
        setCartProducts,
        products,
        setProducts,
        colorsTheme,
        setColorsTheme} = useContext(MyContext)

    let ArrayTexts = [
        "Extended free returns policy",
        "Get in the Vans family!",
        "Free delivery on all orders over €45"
    ]

    const [sentence,setSentence] = useState("Extended free returns policy")

    useEffect(()=>{
        ArrayTexts.sort((a,b)=>0.5-Math.random())
        setSentence(ArrayTexts[0])
    })

      const handleChange=(e)=>{
        let relativeWhite = colorsTheme.colors.light

        switch(relativeWhite){
          case "#fff":
            setColorsTheme(DarkTheme)
            seColorsode("Light-Mode")
            break;
          case "#05001b":
            setColorsTheme(firstTheme)
            seColorsode("Dark-Mode")
            break;
          default:
            break;
        }
     }
  return (
    <Box>
        <div className="switch" >
           
                    <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={colorsmode}
                    onChange={handleChange}
                    />
            
            </div>
        <BlackStripe>
            {sentence}
        </BlackStripe>
        <RedStripe>
              
            SALDOS | Até 50 % de desconto + 10 % de desconto extra com o código: <strong>EXTRA10</strong>
        </RedStripe>
    </Box>
  )
}
