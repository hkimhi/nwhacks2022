import React from "react";
import styled from 'styled-components';
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import Nav from './Nav'

const Container = styled.div`
  background: aqua;
  height: 100vh;
`;

const NavContainer = styled.div`
  width: 25%;
  height: 100%;
  background: #2d5170;
  float: left;
`;

const MainContainer = styled.div`
  margin-left: 25%;
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
        <h1 style={{marginTop: '0', paddingLeft: '8px'}}>Home Page</h1>
        <br />
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </MainContainer>
    </Container>
  );
};

export default Home;