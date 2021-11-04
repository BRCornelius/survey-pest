import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import { getSurveyByName } from '../../utilities';

export const SurveyPage = () => {
    let { survey } = useParams();
    // let activeSurvey = getSurveyByName([], survey);
    return <div className="single-column">
        {survey}
        <Link to="/">
            <button className="three-quarter-width-button">Return</button>
        </Link>
    </div>;
};
