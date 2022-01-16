import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import avatar from '../assets/img_avatar.png';

const Avatar = styled.img`
    width: 50%;
    display: center;
    border-radius: 50%;
`;

const NavItemContainer = styled.div`
    padding: 32px 10px 10px 10px;
`;

const NavItem = styled(Link)`
    color: white;
    padding-left: 20px;
    display: block;
    text-decoration: none;
    font-size: 18px;
    padding-bottom: 16px;
`;

const UserName = styled.p`
    width: 60%;
    padding: 10px;
    margin: 20px auto;
    text-align: center;
    color: white;
    background-color: #0b5394ff;
    border-radius: 10px;
    font-weight: bold;
    font-size: 18px;
`;

const Nav = () => {
    return (
        <>
            <div style={{ textAlign: 'center', paddingTop: '40px' }}>
                <Avatar src={avatar} alt="Avatar" />
            </div>


            <UserName>Hod Kimhi</UserName>

            <NavItemContainer>
                <NavItem to='/home'>Dashboard</NavItem>
                <NavItem to='/'>Calendar</NavItem>
                <NavItem to='/'>Study Manager</NavItem>
                <NavItem to='/'>Grade Tracker</NavItem>
            </NavItemContainer>
        </>
    );
}

export default Nav