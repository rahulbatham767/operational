import React from 'react'
import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import { Chart as Chartjs } from 'chart.js/auto';
const Linechart = ({ day, bg }) => {



    const [userData, setUserData] = useState({

        labels: day,
        datasets: [
            {
                label: "1h 17min (Month:1h 38min)",
                data: [0, 2, 4],
                backgroundColor: [bg],
                fill: true
            }
        ],
    }
    )

    return (
        <div className='text-center card p-2 mb-3'>
            <h5>First Response Time</h5>
            <h6>Last 30 Days</h6>
            <Line data={userData} />
        </div>

    )
}

export default Linechart