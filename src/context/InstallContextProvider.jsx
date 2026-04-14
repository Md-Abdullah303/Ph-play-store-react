import React, { createContext, useState } from 'react';

export const InstallAppsContext = createContext();

const InstallContextProvider = ({children}) => {
    const [installedApp, setInstalledApp] = useState([]);


    const data = {
        name: 'abdullah',
        installedApp, 
        setInstalledApp
    }
    return (
        <InstallAppsContext.Provider value={data}>
            {children}
        </InstallAppsContext.Provider>
    );
};

export default InstallContextProvider;