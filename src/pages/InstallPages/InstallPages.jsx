import React, { use } from 'react';
import { InstallAppsContext } from '../../context/InstallContextProvider';
import InstallAppCard from '../../components/InstallAppCard/InstallAppCard';

const InstallPages = () => {
    const {installedApp} = use(InstallAppsContext)
    return (
        <div className='container mx-auto mb-[40vh]'>
            <div className="text-center my-10">
                <h1 className='text-6xl font-bold'>Your Install Apps</h1>
            </div>
            <div className="">
                <h4 className='font-semibold text-lg'>{installedApp.length} Apps Found</h4>
                <div className="space-y-4 my-4">
                    {
                        installedApp.length === 0 ? <h1 className='text-4xl font-bold text-center '>No data found</h1> :
                        installedApp.map((app)=> <InstallAppCard key={app.id} app={app}></InstallAppCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InstallPages;