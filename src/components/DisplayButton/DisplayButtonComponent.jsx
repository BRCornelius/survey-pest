import React from 'react';
import { Link } from 'react-router-dom';

export const DisplayButtonComponent = ({children, label, value}) => <div className="padded-container">
    <Link to={`/${value}`}>
        {children}
        <button className="three-quarter-width-button">
            {label}
        </button>
    </Link>
</div>;
