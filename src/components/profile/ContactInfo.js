import React from "react";
import styled from "styled-components";

const StyledContactInfoDiv = styled.div`
    border: 1px solid green;
`;

function ContactInfo(props) {
    const {contactInfo} = props;
    let h4Array = [];
    for (let key in contactInfo) {
        h4Array.push(<h4 key={key}>{contactInfo[key]}</h4>);
    }

    return (
        <StyledContactInfoDiv className="contact-info">
            {h4Array}
        </StyledContactInfoDiv>
    )
}

export default ContactInfo