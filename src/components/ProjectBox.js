import React from "react";
import styled from "styled-components";
import {PrevButton, NextButton} from "./project-box/Button";
import Project from "./project-box/Project";

const StyledProjectBox = styled.div`
    background: black;
    height: 49vh;
    display: flex;
    align-items: center;
    overflow: hidden;
`;

function ProjectBox(props) {

    return (
        <StyledProjectBox className="project-box">
            <PrevButton/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <NextButton/>
        </StyledProjectBox>
    )
}

export default ProjectBox;