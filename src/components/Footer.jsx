import React from 'react'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import {AiOutlineInstagram,AiFillFacebook,AiFillLinkedin} from"react-icons/ai"

const Box_general = styled.div`
    position: relative;
    margin-top: 50px;
    background-color: ${props=>props.theme.colors.dark};
    color: ${props=>props.theme.colors.light};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
`
const Box_intern = styled.div`

    flex-wrap: wrap;
    display: flex;
`
const Box_groups = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    h4{
        margin: 0px;
        font-size: 21px;
        font-weight: bold;
    }
    p {
        margin: 0px;
        font-size: 14px;
        color: ${props=>props.theme.colors.light};
    }
`
const Box_social = styled.div`
    display: flex;
`
const Box_botton = styled.div`
    background-color: ${props=>props.theme.colors.dark};
    width: 98vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: auto;
    p{
        cursor: pointer;
        font-size: 12px;
        margin-left: 5px;
    }
`
const A_1 = styled.a`
    color: #fa7777;
    margin-left: 10px;
    transition: 1s;

    &:hover{
        color: #ff2929;
        scale: 1.07;
    }
`
const A = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${props=>props.theme.colors.light};
    &:hover{
        color: #f1f1f1;
    }
`
export default function Footer() {
    const urlVANS = 'https://www.vans.pt/'
  return (
    <Box_general>
        <Container>
            <Box_intern>
                <Box_groups>
                    <h4>COMPRAR</h4>
                    <A target="_blank" href={urlVANS}>Homem</A>
                    <A target="_blank" href={urlVANS}>Mulher</A>
                    <A target="_blank" href={urlVANS}>Criança</A>
                    <A target="_blank" href={urlVANS}>Novas chegadas</A>
                    <A target="_blank" href={urlVANS}>Outlet</A>
                    <A target="_blank" href={urlVANS}>Collaborations</A>
                </Box_groups>
                <Box_groups>
                    <h4>DESPORTO</h4>
                    <A target="_blank" href={urlVANS}>Skate</A>
                    <A target="_blank" href={urlVANS}>BMX</A>
                    <A target="_blank" href={urlVANS}>Surf</A>
                    <A target="_blank" href={urlVANS}>Snow</A>
                </Box_groups>
                <Box_groups>
                    <h4>MARCA</h4>
                    <A target="_blank" href={urlVANS}>Sobre</A>
                    <A target="_blank" href={urlVANS}>Notícias</A>
                    <A target="_blank" href={urlVANS}>Sustentabilidade</A>
                    <A target="_blank" href={urlVANS}>Vegan</A>
                </Box_groups>
                <Box_groups>
                    <h4>ENCOMENDAS</h4>
                    <A target="_blank" href={urlVANS}>Seguir encomenda</A>
                    <A target="_blank" href={urlVANS}>Entrega</A>
                    <A target="_blank" href={urlVANS}>Devoluções</A>
                    <A target="_blank" href={urlVANS}>Guia de tamanhos</A>
                </Box_groups>
                <Box_groups>
                    <h4>APOIO AO CLIENTE</h4>
                    <A target="_blank" href={urlVANS}>Contactar-nos</A>
                    <A target="_blank" href={urlVANS}>FAQs</A>
                    <A target="_blank" href={urlVANS}>Desconto para estudantes</A>
                </Box_groups>
            </Box_intern>

            </Container>
           
            <Box_social>
                <A_1 href="https://www.instagram.com/kaiodeodato/">
                    <AiOutlineInstagram size={30}/></A_1>
                <A_1 href="https://www.facebook.com/kidkabelo/">
                    <AiFillFacebook size={30}/></A_1>
                <A_1 href="https://www.linkedin.com/in/kaio-viana-6ab42016b/">
                    <AiFillLinkedin size={30}/></A_1>
            </Box_social>
            <br></br>
            <Box_botton>
                <p>Preferências de Cookies</p>
                <p>|</p>
                <p>Modern Slavery Statement</p>
                <p>|</p>
                <p>Informações de pagamento</p>
                <p>|</p>
                <p>Política de Privacidade</p>
                <p>|</p>
                <p>Termos de utilização do website</p>
                <p>|</p>
                <p>Condições de venda</p>
            </Box_botton>
            
            
    </Box_general>
  )
}
