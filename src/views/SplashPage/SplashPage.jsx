import React, { useContext } from 'react';
import { DisplayButtonComponent } from '../../components';
import { GlobalContext } from '../../context/global-context';

export const SplashPage = () => {
    const { surveys } = useContext(GlobalContext);
    return <div className="two-column-grid">
        {surveys.map(survey => <DisplayButtonComponent key={survey.name} label="Click Me" value={survey.name}>
            <h2>{survey.name}</h2>
        </DisplayButtonComponent>)}
    </div>
};
