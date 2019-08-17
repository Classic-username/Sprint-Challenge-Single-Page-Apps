import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const KDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 15px;
`;

// TODO: Add missing tabs below
export default function TabNav() {
    return(
        <KDiv>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/characters'>Characters</NavLink>
            <NavLink to='/locations'>Locations</NavLink>
            <NavLink to='/episodes'>Episodes</NavLink>
        </KDiv>
    )
};
