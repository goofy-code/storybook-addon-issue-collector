import React from 'react';

export const Input = ({ label, value, options, onChange }) => {
    const selectLabelStyles = {
        display: 'block',
        textTransform: 'uppercase',
    };

    const selectFieldStyles = {
        fontSize: '16px',
        lineHeight: '22px',
        padding: '4px 10px 2px 5px',
        minWidth: '200px',
        borderRadius: '0',
        border: '1px solid #333333',
        backgroundColor: 'transparent',
    };

    return (
        <div>
            <label style={selectLabelStyles}>{label}</label>
            <input style={selectFieldStyles} value={value} onChange={onChange} />
        </div>
    );
};
