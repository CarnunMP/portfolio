import React from "react";
import styled from "styled-components";

const StyledProject = styled.div`
    background: blue;
    height: 80%;
    width: 22%;
    margin-left: 2%;
    margin-right: 2%;
    position: relative;
    left: 6%;
`;

function Project(props) {

    return (
        <StyledProject className="project">

        </StyledProject>
    )
}

export default Project;