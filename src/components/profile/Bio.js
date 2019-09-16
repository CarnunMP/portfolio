import React from "react";
import styled from "styled-components";

const StyledBioDiv = styled.div`
    background: black;
    padding: 1rem;
    margin-bottom: 3%;

    p {
        color: white;
    }
`;

function Bio(props) {
    const {bio} = props;

    return (
        <StyledBioDiv className="bio">
            <p>{bio}</p>
        </StyledBioDiv>
    )
}

export default Bio;