import React from 'react';
import Banner from '../../components/homePage/Banner';
import TrendingApps from '../../components/homePage/TrendingApps';
import Stats from '../../components/homePage/Stats';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default HomePage;