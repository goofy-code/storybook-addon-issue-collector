import React from 'react';
// import './link-buttons.scss';

export const LinkButton = ({ href, target, label }) => {
    const buttonStyles = {
        textDecoration: 'none',
        textTransform: 'uppercase',
        padding: '2px 10px',
        border: '1px solid #16171a',
        backgroundColor: '#16171a',
        color: '#ffffff',
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: 'bold',
        display: 'inline-block',
        transition: 'background-color 0.3s ease-out',
    };
    return (
        <a style={buttonStyles} className={'cmp-link-button'} target={target} href={href}>
            {label}
        </a>
    );
};
