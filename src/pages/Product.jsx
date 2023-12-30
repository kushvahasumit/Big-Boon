import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import image from '../images/ladybag.jpg'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 105vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
     flex: 1;
     padding: 30px;
`
const Title = styled.h1`
    font-weight: 200;

`
const Desc = styled.p`
    margin: 20px 0px;
    font-size:20px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
     width: 50%;
     margin: 30px 0px;
     display:flex;
     justify-content: space-between;
`

const Filter = styled.div`
     display: flex;
     align-items: center;
`
const FilterTitle = styled.span`
     font-size: 20px;
     font-weight: 200;
`
const FilterColor = styled.div`
     width: 20px;
     height: 20px;
     border-radius: 50%;
     background-color: ${(props)=>props.color};
     margin: 0px 5px;
     cursor: pointer;
`
const FilterSize = styled.select`
     margin-left: 10px;
     padding: 5px;
`
const FilterSizeOption = styled.option`
     
`
const AddContainer = styled.div`
     width: 50%;
     display: flex;
     align-items: center;
     justify-content: space-between;
`
const AmountContainer = styled.div`
     display: flex;
     align-items: center;
     font-weight: 700;
`
const Amount = styled.span`
     width: 30px;
     height: 30px;
     border-radius: 10px;
     border: 1px solid teal;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 0px 5px;
`
const Button = styled.button`
     padding: 10px;
     border: 2px solid teal;
     background-color: white;
     cursor: pointer;
     font-weight: 200;
     &:hover{
        background-color: #cee2f3;
     }
`


const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    const [product,setProduct] = useState({})
    const [quantity,setquantity] = useState(1)
    // const amount = product.price*quantity;
    const dispatch = useDispatch();


    const handleQuantity = (type)=>{
        if(type==="dec"){
           quantity>1 && setquantity(quantity-1)
            
        }else{
            setquantity(quantity+1)
             
        }
    }
    
    const handleCart =()=>{
        dispatch(addProduct({ ...product,quantity})) 
    }

               
    useEffect(()=>{
        const getProduct = async ()=>{ 
            try {
                const res = await publicRequest.get("/product/find/"+id)
                setProduct(res.data)
                console.log("this is response",res)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    },[id])


    console.log("this is final product",product)
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
            <Image src={product.img}/>
        </ImgContainer>
        <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price >${product.price}</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>

                     <FilterColor color={product.color}/>   
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                     <FilterSizeOption>{product.size}</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <RemoveIcon onClick={()=>handleQuantity("dec")} />
                    <Amount>{quantity}</Amount>
                    <AddIcon onClick={()=>handleQuantity("inc")}/>
                </AmountContainer>
                <Button onClick={handleCart}>Add to Cart</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>

    </Container>
  )
}

export default Product
