import React from "react";
import styled from "styled-components";

const StyledNameDiv = styled.div`
    border: 1px solid green;
`;

function Name(props) {
    const {name} = props;

    return (
        <StyledNameDiv className="name">
            <h2>{name}</h2>
        </StyledNameDiv>
    )
}

export default Name;