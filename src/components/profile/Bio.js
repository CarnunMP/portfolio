import React from "react";
import styled from "styled-components";

const StyledBioDiv = styled.div`
    border: 1px solid purple;
    max-width: 30rem;
    padding: 1rem;
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