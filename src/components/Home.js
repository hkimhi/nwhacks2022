import React from "react";
import styled from 'styled-components';
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import Nav from './Nav'
import ItemList from "./ItemList";

const Container = styled.div`
  background: aqua;
  height: 100vh;
  color: white;
`;

const NavContainer = styled.div`
  width: 15%;
  height: 100%;
  background: #2d5170;
  float: left;
`;

const MainContainer = styled.div`
  margin-left: 15%;
  height: 100%;
  background: #0b2c4a;
`;


const Home = () => {
  return (
    <Container>
      <NavContainer id="nav-container">
        <Nav />
      </NavContainer>


      <MainContainer id="main-container">
        <div style={{ float: 'left', width: '55%' }}>
          <ItemList title="Announcements" />
        </div>

        <div style={{ marginLeft: '55%'}}>
          <ItemList title="Upcoming" />
        </div>
      </MainContainer>
    </Container>
  );
};

export default Home;