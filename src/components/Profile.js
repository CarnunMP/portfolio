import React from "react";
import styled from "styled-components";
import ProfilePic from "./profile/ProfilePic";
import Name from "./profile/Name";
import ContactInfo from "./profile/ContactInfo";

const StyledProfile = styled.div`
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;

    .pic-name-and-contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid red;
    }
`;

function Profile(props) {
    const {profilePic, name, contactInfo, bio, artefacts} = props;

    return (
        <StyledProfile className="profile">
            <div className="pic-name-and-contact">
                <ProfilePic profilePic={profilePic}/>
                <Name name={name}/>
                <ContactInfo contactInfo={contactInfo}/>
            </div>
            <div className="bio-and-links">

            </div>
        </StyledProfile>
    )
}

export default Profile;