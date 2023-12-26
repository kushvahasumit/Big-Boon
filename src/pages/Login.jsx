import React from 'react'
import styled from 'styled-components'

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
width: 30%;


`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Intput = styled.input`
    border: none;
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Link = styled.a`
    font-size: 12px;
    margin: 8px 0px;
    text-decoration: underline;
    cursor: pointer;
`
const Button = styled.button`
   width: 40%;
   padding: 15px 15px;
   border: none;
   background-color: teal;
   color: white;
   cursor: pointer;
`

const Login = () => {
  return (
    <Container>
       
      
      <Wrapper>
        <Title>
            SIGN IN
        </Title>
        <Form>
            
            <Intput placeholder="userName" />
            <Intput placeholder="password" />
            <Button> LOGIN ACCOUNT </Button>
            <Link>DON'T REMEMBER YOUR PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>

        </Form>
      </Wrapper>
      
  
    </Container>
  )
}

export default Login
