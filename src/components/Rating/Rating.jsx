import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Rating = ({ratings}) => {
    // console.log(ratings);
    return (
        <div className='m-10 flex flex-col items-start gap-4'>
            <h1>Rating</h1>
            <div className="">
                <BarChart
                width={`w-full`}
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