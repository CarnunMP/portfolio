import React from "react";
import styled from "styled-components";

const StyledPicDiv = styled.div`
    border: 1px solid red;
    max-width: 20rem;
    border-radius: 50%;
    overflow: hidden;

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