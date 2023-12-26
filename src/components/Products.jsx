import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
   padding: 20px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;

`

const Products = ({cat,filters,sort}) => {
  const [products,setProducts] = useState([]);
  const [filterProducts,setFilterProducts] = useState([])

  useEffect(()=>{
  const getProducts = async()=>{
     try {
      const res = await axios.get( cat ? `http://localhost:5000/api/product?category=${cat}` : "http://localhost:5000/api/product" )
       
      setProducts(res.data)
     } catch (error) {
       console.log(error)
     }
  }
  getProducts()
  },[cat])

  useEffect(()=>{
      cat && setFilterProducts(
        products.filter((item) => 
        Object.entries(filters).every(([key,value])=> 
        item[key].includes(value))
        )
      )
  },[products,cat,filters])

  // console.log(products)

  return (
    <Container>
      {popularProducts.map((item)=>(
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products
