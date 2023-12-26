import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import old from '../images/olds.jpg'
 

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const Wrapper = styled.div`
background-color: #abcce9;
padding: 20px;
width: 40%;


`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Intput = styled.input`
    border: none;
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 16px;
    margin: 20px 0px;
`
const Button = styled.button`
   width: 40%;
   padding: 15px 20px;
   border: none;
   background-color: teal;
   color: white;
   cursor: pointer;
`

const Register = () => {
  return (
    <Container>
       
      
      <Wrapper>
        <Title>
            CREATE AN ACCOUNT
        </Title>
        <Form>
            <Intput placeholder="name" />
            <Intput placeholder="lastName" />
            <Intput placeholder="userName" />
            <Intput placeholder="e-mail" />
            <Intput placeholder="password" />
            <Intput placeholder="confirm password" />
            <Agreement>
                By Creating an account, I Consist to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button> CREATE ACCOUNT </Button>
        </Form>
      </Wrapper>
      
  
    </Container>
  )
}

export default Register
