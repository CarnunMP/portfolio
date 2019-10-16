import React from "react";
import styled from "styled-components";

const StyledHomeButton = styled.div`
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        color: white;
    }
`;

function HomeButton() {
    return (
        <StyledHomeButton className="home-button">
            <h2>Go Back To Homepage</h2>
        </StyledHomeButton>
    )
}

export default HomeButton;