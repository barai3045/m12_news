import React from 'react';

const SubmitButton = (props) => {
    if (props.submit === false) {
        return <button onClick={props.onClick} type='submit' className={props.className} >{props.text}</button>
    } else {
        return (
            <button type="button" class="bg-indigo-500 ..." disabled>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Processing...
            </button>
        )
    }
};

export default SubmitButton;