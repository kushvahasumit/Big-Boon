import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 35px;
    background-color: #008080a2;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: 18px;
    font-weight: 600;
`

const Announcement = () => {
  return (
    <Container>
      Big Boon Deal !! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement
