import React from 'react';

const PrimaryButton = ({ title, className }) => {
    return (
        <button className={className}>
            {title}
        </button>
    );
};

export default PrimaryButton;
