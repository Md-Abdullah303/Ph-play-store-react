import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <h1 className=''>navber</h1>
            <Outlet></Outlet>
            <h1>footer</h1>
        </div>
    );
};

export default RootLayout;