import React,{useState,useEffect} from 'react'
import styled from 'styled-components'

const Banner_container = styled.img`
    position: relative;
    top: 50px;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 300px;
    width: 100%;
    border-radius: 5px;
    transition: 1s;
`
export default function Banner(props) {

    const [bannerImages,setBannerImages] = useState([])
  

    function getAPI(url,set){
        fetch(url)
        .then(res=>res.json())
        .then(json=>set(json))
        }

    useEffect(()=>{
        const bannerAPI = 'https://gist.githubusercontent.com/kaiodeodato/c4a55b765b34a9dbd6fdf3d12f1d8b90/raw/298e8aefb0ecbca5276af4a97d761c57c023204d/Banner__API.json'

        getAPI(bannerAPI,setBannerImages)
    },[])

    function getElementBanner(){
        if(bannerImages.length > 0){
        const randomNumber = Math.round(Math.random()*6)
        return (
            <div>
             <Banner_container src={bannerImages[randomNumber].image}/>
             </div>
            )
        }
    }
   

    const element = getElementBanner()

  return (
    <div>
        {bannerImages.length > 0 && element}
    </div>
  )
}



