import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const SectionTitle = styled.h3`
    margin-top: 0;
    background-color: #7da3c6;
    min-width: fit-content;
    padding: 8px;
    border-radius: 8px;
    font-weight: bold;
`;

const Button = styled.button`
    background-color: #315a7f;
    color: white;
    padding: 8px;
    font-weight: bold;
    border-radius: 8px;
    border-style: none;
    display: inline-block;
`;

const ItemList = (props) => {
    return (
        <>
            <div style={{ padding: '16px' }}>
                <div style={{ width: '25%' }}>
                    <SectionTitle>{props.title}</SectionTitle>
                </div>

                {props.items.map((item, index) => <Item key={index} title={item.title}>{item.text}</Item>)}

                <div style={{ textAlign: 'center' }}>
                    <Button as={Link} to="/todo">See More</Button>
                </div>
            </div>

        </>
    );
}

const ItemContainer = styled.div`
    border-radius: 8px;
    background-color: #134776;
    padding: 12px 16px;
    margin-bottom: 16px;
`;

const ItemTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 0;
`;

const Item = (props) => {
    return (
        <ItemContainer>
            <ItemTitle>{props.title}</ItemTitle>
            {props.children && <p style={{ marginBottom: '4px' }}>{props.children}</p>}
        </ItemContainer>
    );
}

export default ItemList;