import React from "react";
import styled from "styled-components";

const StyledHomeButton = styled.div`
    background: grey;
    height: 6vh;
`;

function HomeButton() {
    return (
        <StyledHomeButton className="home-button">
            <h2>Go Back To Homepage</h2>
        </StyledHomeButton>
    )
}

export default HomeButton;