import React from 'react';

export const Select = ({ label, value, options, onChange }) => {
    const selectLabelStyles = {
        display: 'block',
        textTransform: 'uppercase',
    };

    const selectFieldStyles = {
        fontSize: '16px',
        lineHeight: '22px',
        padding: '2px 10px 2px 5px',
        minWidth: '100px',
        borderRadius: '0',
        border: '1px solid #333333',
        backgroundColor: 'transparent',
    };

    return (
        <div className={'cmp-select'}>
            <label style={selectLabelStyles} className="cmp-select__label">
                {label}
            </label>
            <select style={selectFieldStyles} className="cmp-select__field" value={value} onChange={onChange}>
                {options.map((option, key) => (
                    <option key={key} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
