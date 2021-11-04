import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => <header>
    <Link to="/create">
        <button className="three-quarter-width-button">Create an Email List</button>
    </Link>
</header>;