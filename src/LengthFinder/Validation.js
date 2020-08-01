import React from 'react';

const validationString = (props) => {
    let validationMessage = "Text too short";
    if (props.textLength >= 6) validationMessage = "Text long enough";
    return (
        <p> {validationMessage} </p>
    );
}

export default validationString;