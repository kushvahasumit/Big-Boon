import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
 

 
const Container = styled.div`
   flex:1;
   margin: 3px;
   height: 70vh;
   position: relative;
   
`
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   
`
const Info = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
const Titlt = styled.h1`
      color: #005252;
   margin-bottom: 20px;
`
const Button = styled.button`
   border: none;
   cursor: pointer;
   background-color: #008080c1;
   color: white;
   padding: 10px;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
     <Image src={item.img} />
     <Info>
        <Titlt>{item.title}</Titlt>
        <Button>SHOP NOW</Button>
     </Info>
     </Link>
    </Container>
  )
}

export default CategoryItem
