import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitFormEntries } from '../../utilities';

export const CreatePage = () => {
    let [surveyName, setSurveyName] = useState('');
    let [emailsLength, setEmailsLength] = useState(3);
    let [url, setUrl] = useState('');

    const generateEmailInputs = () => {
        const result = [];
        for(let i = 0; i < emailsLength; i++) {
            result.push('.')
        };
        return result
    };

    const handleSubmit = () => {
        submitFormEntries({surveyName, url});
    }

    return <div className="single-column">
        <label>Survey Name</label>
        <input type="text" value={surveyName} onChange={e => setSurveyName(e.target.value)} />
        <label>Survey URL</label>
        <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
        {generateEmailInputs().map((email, i) => <div className="row" key={i}>
            <input type="text" className="input-row" />
            <button
                onClick={() => setEmailsLength(emailsLength -= 1)}
            >-</button>
        </div>)}
        <button
            onClick={() => setEmailsLength(emailsLength += 1)}
        >+</button>
        <button onClick={handleSubmit}>Submit</button>
        <Link to="/">
            <button className="three-quarter-width-button">Return</button>
        </Link>
    </div>
};
