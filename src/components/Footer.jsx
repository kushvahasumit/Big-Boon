import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
`;

const Logo = styled.h1`

`
const Desc = styled.p`
 margin: 15px 0px;
 ${mobile({
    display:"none",

  })}
`
const SocialContainer = styled.div`
 display: flex;
 ${mobile({
   
    flexDirection:"column",
    

  })}
`
const SocialIcon = styled.div`
 width: 40px;
 height: 40px;
 background-color: #${props=>props.color};
 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 20px;
 border-radius: 50%;
 
`


const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display:"none",

  })}
`;

const Title = styled.h3`
 margin-bottom: 30px;
`

const List = styled.ul`
   margin: 0px;
   padding: 0px;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`

const ListItem = styled.li`
 width: 50%;
 margin-bottom: 10px;
`


const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    fontSize:"12px",
    flex:2,
  })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({
   
   flexDirection:"column",
   marginBottom:"2px",
    
 })}
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BIG BOON.</Logo>
        <Desc>
          eCommerce Fashion industry is among the most important industries in
          the world and it accounts for a substantial share of the global
          economy. It is evident that eCommerce is growing rapidly after the
          pandemic. Every day more businesses are going digital and the
          competition in the niche markets is rising too. 
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Link</Title>
        <List>
           <ListItem>Home</ListItem>
           <ListItem>Cart</ListItem>
           <ListItem>Man Fashion</ListItem>
           <ListItem>Women Fashion</ListItem>
           <ListItem>Accessories</ListItem>
           <ListItem>MY Account</ListItem>
           <ListItem>Order Tracker</ListItem>
           <ListItem>Wshing</ListItem>
           <ListItem>Wishlist</ListItem>
           <ListItem>Terms & Conditions</ListItem>

        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{marginRight:"10px"}}/>  233 Indira Nagar, Rishikesh 249201
        </ContactItem>
        <ContactItem>
        <LocalPhoneIcon style={{marginRight:"10px"}}/>  +91 9557911791
        </ContactItem>
        <ContactItem>
        <EmailIcon style={{marginRight:"10px"}}/>  kumarxumit6@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
