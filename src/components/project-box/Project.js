import React from "react";
import styled from "styled-components";

const StyledProject = styled.div`
    background: blue;
    border: 1px solid red;
    height: 80%;
    width: 20%;
    /* margin-left: 1%; */
    margin-right: 1%;
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