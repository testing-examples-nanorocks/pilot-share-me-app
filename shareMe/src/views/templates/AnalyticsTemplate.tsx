import React from 'react'
import { Doughnut } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {}

export default function AnalyticsTemplate({ }: Props) {

    const data: any = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    '#0284c7',
                    '#7c3aed',
                    '#db2777    ',
                    '#0891b2',
                    '#65a30d',
                    '#ea580c',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <div className="min-h-full">
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
                    </div>
                </header>
                <main className='flex justify-center'>
                    <div className="w-full md:w-2/5 lg:w-2/5 xs:w-full">
                        <div className="p-4 pt-20 w-1/2">
                            <Doughnut data={data} />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}