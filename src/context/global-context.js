import React, {createContext} from 'react';

export const GlobalContext = createContext({});

const defaultContext = {
    surveys: [
        {name: 's1', emails: ['email@amail.com', 'email@bmail.com', 'email@cmail.com']},
        {name: 's2', emails: ['email@dmail.com', 'email@email.com', 'email@fmail.com']},
        {name: 's3', emails: ['email@gmail.com', 'email@hmail.com', 'email@imail.com']}
    ]
};

export const ContextProvider = ({children}) => <GlobalContext.Provider value={defaultContext}>{children}</GlobalContext.Provider>
