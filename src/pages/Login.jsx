import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls'

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
   margin-bottom: 10px;
   &:disabled{
    color: green;
    cursor: not-allowed;
   }
`

const Error = styled.span`
  color: red;
`

const Login = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch()

  const {isfetching, error} = useSelector((state) => state.user)

const handleClick = (e)=>{
  e.preventDefault()
  login(dispatch,{username,password})
}

  return (
    <Container>
       
      
      <Wrapper>
        <Title>
            SIGN IN
        </Title>
        <Form>
            
            <Intput placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <Intput placeholder="password" type='password' onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={handleClick} disabled={isfetching} > LOGIN ACCOUNT </Button>
           {error && <Error>SOMETHING WENT WRONG</Error>}
            <Link>DON'T REMEMBER YOUR PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>

        </Form>
      </Wrapper>
      
  
    </Container>
  )
}

export default Login
