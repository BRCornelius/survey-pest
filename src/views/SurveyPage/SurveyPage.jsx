import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/global-context';
import { getSurveyByName } from '../../utilities';

export const SurveyPage = () => {
    let { survey } = useParams();
    const { surveys } = useContext(GlobalContext);
    let { name, emails} = getSurveyByName(surveys, survey);
    return <div className="single-column">
        <div>
            <h1>Remaining emails from {name}:</h1>
            {emails.map(email => <p>{email}</p>)}
        </div>
        <Link to="/">
            <button className="three-quarter-width-button">Return</button>
        </Link>
    </div>;
};
