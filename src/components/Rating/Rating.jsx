import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Rating = ({ratings}) => {
    console.log(ratings);
    return (
        <div className='m-10'>
            <h1>Rating</h1>
            <div className="">
                <BarChart
                width={500}
                height={300}
                data={ratings}
                >
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Bar fill='red' dataKey={'count'}></Bar>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default Rating;