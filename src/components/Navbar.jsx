import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import styled from "styled-components";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";


const Container = styled.div`
  height: 70px;
  ${mobile({
    height:"50px",

  })}
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
      padding:"0px 10px",

  })}
`;

const Language = styled.span`
  font-size: 24px;
  justify-content: center;
  cursor: pointer;
  ${mobile({
      display:"none",

  })}
`;

const Input = styled.input`
  border: none;
  ${mobile({
      width:"50px",

  })}
`;

const Logo = styled.h3`
  font-weight: bold;
  font-size: 30px;
  ${mobile({
        fontSize: "15px",

  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({
          marginLeft: "0px",
          padding: "0px",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
            justifyContent: "center",
            flex:2,
            
  })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
  ${mobile({
              fontSize: "10px",
              display: "none",
               

  })}
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <SearchIcon style={{color:"gray",fontSize:"16px"}} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo >BIG BOON.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>

          <MenuItem>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartCheckoutOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
