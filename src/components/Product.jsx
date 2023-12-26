import React from 'react'
import styled from 'styled-components'
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';

const Info = styled.div`
opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 310px;
    height: 350px;
     position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover ${Info}{ 
       opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const  Image  = styled.img`
    width: 100%;
    height: 75%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all .5s ease;
    &:hover{
        background-color: #e9e9e9;
        transform: scale(1.1);
    }
`
 
const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img} />
      <Info>
        <Icon>
      <ShoppingCartCheckoutOutlinedIcon /></Icon>
      <Icon> 
      <SearchIcon /></Icon>
      <Icon>
      <FavoriteBorderIcon /></Icon>
      </Info>
    </Container>
  )
}

export default Product
