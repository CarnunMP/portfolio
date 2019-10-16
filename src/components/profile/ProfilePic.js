import React from "react";
import styled from "styled-components";

const StyledPicDiv = styled.div`
    border: 5px solid black;
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 2%;

    img {
        width: 100%;
        height: 100%;
    }
`;

function ProfilePic(props) {
   const {profilePic} = props;

   return (
       <StyledPicDiv className="profile-pic">
           <img src={profilePic}/>
       </StyledPicDiv>
   )
}

export default ProfilePic;