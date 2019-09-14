import React from "react";
import styled from "styled-components";

const StyledArtefactsDiv = styled.div`
    border: 1px solid green;
    height: 3rem;
`;

function Artefacts(props) {
    const {artefacts} = props;

    return (
        <StyledArtefactsDiv className="artefacts">

        </StyledArtefactsDiv>
    )
}

export default Artefacts;