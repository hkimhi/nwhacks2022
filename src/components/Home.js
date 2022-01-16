import React from "react";
import styled from 'styled-components';
// importing Link from react-router-dom to navigate to 
// different end points.
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


const announcementItems = [
  { title: "Announcement Title 1", text: "Announcement Item 1" },
  { title: "Math 220 Final Exam Location Change", text: "Announcement Item 2" },
  { title: "CPEN221 You All Fail", text: "Announcement Item 3" }
]

const upcomingItems = [
  { title: "ELEC 204 WebWork 7" },
  { title: "MATH 217 WebWork 9" },
  { title: "MATH 220 ComPair" },
  { title: "CPEN 221 Milestone" },
]


const Home = () => {
  return (
    <Container>
      <NavContainer id="nav-container">
        <Nav />
      </NavContainer>

      <MainContainer id="main-container">
        <div style={{ float: 'left', width: '55%' }}>
          <ItemList title="Announcements" items={announcementItems} />
        </div>

        <div style={{ marginLeft: '55%' }}>
          <ItemList title="Upcoming" items={upcomingItems} itemHeight={'10px'} />
        </div>
      </MainContainer>
    </Container>
  );
};

export default Home;