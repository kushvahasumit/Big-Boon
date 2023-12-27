import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import blackshirt from '../images/blackshirt.jpg'
import Frock from '../images/frock.jpg'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div`
    
`
const Wrapper = styled.div`
   padding: 20px;

`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};

`
const TopTexts = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
   
`
const TopText = styled.span``


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Summary = styled.div`
    flex:1;
    border: .5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 23%;
  padding: 20px;
`
const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
   width: 20px;height: 20px;
   border-radius: 50%;
   background-color: ${props=>props.color};
`
const ProductSize = styled.span`
   
`
const PriceDetail = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
`
const ProductAmount = styled.div`
   font-size: 24px;
   margin: 15px;
`
const ProductPrice = styled.div`
   font-size: 30px;
   font-weight: 200;
`
const Hr = styled.hr`
    background-color:#dad9d9;
    border: none;
    height: 1px;
`
const SummeryItem = styled.div`
     margin: 30px 0px;
     display: flex;
     justify-content: space-between;
     font-weight: ${props=>props.type === 'total' && '500'};
     font-size: ${props=>props.type === 'total' && '25px'};

`
const SummeryTitle = styled.h2`
     
`
const SummeryItemText = styled.span`
     
`
const SummeryItemPrice = styled.span`
     
`
const Button = styled.button`
     width: 100%;
     padding: 10px;
     background-color: teal;
     color: white;
     font-weight: 500;
     font-size: 18px;
`
 

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPING</TopButton>
            <TopTexts>
                  <TopText>Shopping Bag(2)</TopText>
                  <TopText>Your Wishlist(0)</TopText>

            </TopTexts>
            <TopButton type='filled'>CHECKOUT NOW</TopButton>

        </Top>
        <Bottom>
            <Info>
                <Product>
                 <ProductDetail>
                <Image src={blackshirt} />
                <Details>
                    <ProductName><b>Product:</b> JESSIE ALL BLACK </ProductName>
                    <ProductId><b>ID:</b> 9557911 </ProductId>
                    <ProductColor color='black'/>
                    <ProductSize><b>Size:</b> 15.5 </ProductSize>

                </Details>
                </ProductDetail>  
                <PriceDetail>
                     <ProductAmountContainer>
                      <AddIcon/>
                     <ProductAmount>
                        2
                     </ProductAmount>
                     <RemoveIcon/>
                     </ProductAmountContainer>
                     <ProductPrice>$30</ProductPrice>
                </PriceDetail> 
                </Product>
                <Hr/>
                <Product>
                 <ProductDetail>
                <Image src={Frock} />
                <Details>
                    <ProductName><b>Product:</b> YELLOW FLOWERED FROCK </ProductName>
                    <ProductId><b>ID:</b> 9557912 </ProductId>
                    <ProductColor color='YELLOW'/>
                    <ProductSize><b>Size:</b> 19.8 </ProductSize>

                </Details>
                </ProductDetail>  
                <PriceDetail>
                     <ProductAmountContainer>
                      <AddIcon/>
                     <ProductAmount>
                        4
                     </ProductAmount>
                     <RemoveIcon/>
                     </ProductAmountContainer>
                     <ProductPrice>$40</ProductPrice>
                </PriceDetail> 
                </Product>
            </Info>
            <Summary>
                <SummeryTitle>ORDER SUMMERY</SummeryTitle>
                <SummeryItem>
                    <SummeryItemText>Subtotal</SummeryItemText>
                    <SummeryItemPrice>$70</SummeryItemPrice>
                </SummeryItem>
                <SummeryItem>
                    <SummeryItemText>Estimated Shipping</SummeryItemText>
                    <SummeryItemPrice>$ 8.90</SummeryItemPrice>
                </SummeryItem>
                <SummeryItem>
                    <SummeryItemText>Shipping Discount</SummeryItemText>
                    <SummeryItemPrice>$ 8.9</SummeryItemPrice>
                </SummeryItem>
                <SummeryItem type='total'>
                    <SummeryItemText >Total</SummeryItemText>
                    <SummeryItemPrice>$70</SummeryItemPrice>
                </SummeryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
      

    </Container>
  )
}

export default Cart
