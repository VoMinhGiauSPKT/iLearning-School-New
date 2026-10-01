import React from 'react';

const QuoteIcon = ({ width = 34, height = 26, color = 'var(--il-color-primary, #00df9a)', className = '', ...props }) => {
    return (
        <div className={`quote-icon ${className}`.trim()} aria-hidden="true" {...props}>
            <svg width={width} height={height} viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 0H16L10 26H1.5L7.5 0ZM21.5 0H30L24 26H15.5L21.5 0Z" fill={color} />
            </svg>
        </div>
    );
};

export default QuoteIcon;
