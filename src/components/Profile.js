import React from "react";
import styled from "styled-components";
import ProfilePic from "./profile/ProfilePic";
import Name from "./profile/Name";
import ContactInfo from "./profile/ContactInfo";
import Bio from "./profile/Bio";
import Artefacts from "./profile/Artefacts";

const StyledProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45vh;

    .pic-name-and-contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        min-width: 25%;
    }

    .bio-and-artefacts {
        border: 2px solid blue;
        height: 100%;
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
            <div className="bio-and-artefacts">
                <Bio bio={bio}/>
                <Artefacts artefacts={artefacts}/>
            </div>
        </StyledProfile>
    )
}

export default Profile;