import React from "react";
import styled from "styled-components";

const StyledContactInfoDiv = styled.div`
    background: black;
    color: white;
    padding: 1%;
    margin-top: 5%;
`;

function ContactInfo(props) {
    const {contactInfo} = props;
    let h2Array = [];
    for (let key in contactInfo) {
        h2Array.push(<h2 key={key}>{contactInfo[key]}</h2>);
    }

    return (
        <StyledContactInfoDiv className="contact-info">
            {h2Array}
        </StyledContactInfoDiv>
    )
}

export default ContactInfo