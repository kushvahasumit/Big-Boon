import React, { useState } from "react";
import { sliderItems } from "../data";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({
              
              display: "none",
               

  })}
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: #cdc8c8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
 display: flex;
 transition: all 1.5s ease;
 transform: translateX(${props=>props.sliderIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props=>props.bg};
`;

const ImgContainer = styled.div`
  flex: 0;
  height: 100%;
`;

const Image = styled.img`
  padding: 35px;
  height: 80%;
  
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 165px;
  
`;

const Title = styled.h1`
   font-size:70px;
   
`
const Desc = styled.p`
 margin: 50px 0px;
 font-size: 20px;
 font-weight: 500;
 letter-spacing: 3px;
 width: auto;
`
const Button = styled.button`
 padding: 10px;
 font-size: 20px;
 background-color: transparent;
 cursor: pointer;
`


const Slider = () => {
  const [sliderIndex,setSlider] = useState(0)
  const handleClick = (direction)=>{
    if (direction==="left") {
      setSlider(sliderIndex > 0 ? sliderIndex-1 :2 )
    }else{
      setSlider(sliderIndex < 2 ? sliderIndex +1 :0)
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <KeyboardArrowLeftIcon />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderItems.map(items=>(
        <Slide bg={items.bg} key={items.id}>
          <ImgContainer>
            <Image src={items.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{items.title}</Title>
            <Desc>{items.desc}</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <KeyboardArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
