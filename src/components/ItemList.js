import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.p`
    background-color: #7da3c6;
    max-width: fit-content;
    padding: 8px;
    border-radius: 8px;
    font-weight: bold;
`;

const ItemList = (props) => {
    return (
        <div style={{ padding: '16px' }}>
            <div style={{ width: '25%' }}>
                <SectionTitle>{props.title}</SectionTitle>
            </div>

            <Item title="Announcement Title 1">
                AnnouncementItem 1
            </Item>
            <Item title="Math 220 Final Exam Location Change">
                AnnouncementItem 2
            </Item>
            <Item title="CPEN221 you all fail">
                AnnouncementItem 3
            </Item>
        </div>
    );
}

const ItemContainer = styled.div`
    border-radius: 8px;
    background-color: #134776;
    padding: 12px 16px 4px;
    margin-bottom: 16px;
`;

const ItemTitle = styled.h2`
    margin-top: 0;
`;

const Item = (props) => {
    return (
        <ItemContainer>
            <ItemTitle>{props.title}</ItemTitle>
            <p>{props.children}</p>
        </ItemContainer>
    );
}

export default ItemList;