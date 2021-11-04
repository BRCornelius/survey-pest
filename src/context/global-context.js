import React, {createContext} from 'react';

export const GlobalContext = createContext({});

const defaultContext = {
    surveys: [{name: 's1'}, {name: 's2'}, {name: 's3'}]
};

export const ContextProvider = ({children}) => <GlobalContext.Provider value={defaultContext}>{children}</GlobalContext.Provider>
