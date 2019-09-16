import React from "react";
import styled from "styled-components";

const StyledNameDiv = styled.div`
    background: black;
    color: white;
    padding: 1%;
    margin-top: 3%;
`;

function Name(props) {
    const {name} = props;

    return (
        <StyledNameDiv className="name">
            <h1>{name}</h1>
        </StyledNameDiv>
    )
}

export default Name;