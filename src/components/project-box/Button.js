import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
    background: green;
    width: 3vw;
    height: 3vw;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 200%;
    position: absolute;

    :first-of-type {
        left: 2%;
    }

    :last-of-type {
        right: 2%;
    }
`;

export function PrevButton() {
    return (
        <StyledButton className="button prev">
            <h2>⟵</h2>
        </StyledButton>
    )
}

export function NextButton() {
    return (
        <StyledButton className="button prev">
            <h2>⟶</h2>
        </StyledButton>
    )
}