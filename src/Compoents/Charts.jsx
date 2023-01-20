import React from 'react'
import { Data } from './Data';
import { Bar } from 'react-chartjs-2';
import { useState } from 'react';
import { Chart as Chartjs } from 'chart.js/auto';
import Linechart from './Linechart';


const Charts = (() => {
    // eslint-disable-next-line
    const [userData, setUserData] = useState({

        labels: Data.map((user) => user.Agent),
        datasets: [
            {
                label: "Cases Increase",
                data: Data.map((user) => user.Case),
                backgroundColor: ["#76a700"],
                indexAxis: 'y',
            }
        ],
        options: {

        }


    }
    )
    const day = ['2018-11-17', '2018-11-18', '2018-11-19', '2018-11-20', '2018-11-21', '2018-11-22', '2018-11-23', '2018-11-24', '2018-11-25', '2018-11-26', '2018-11-27', '2018-11-28', '2018-11-29', '2018-11-30', '2018-12-01', '2018-12-02', '2018-12-03', '2018-12-04', '2018-12-05', '2018-12-06', '2018-12-07', '2018-12-08', '2018-12-09', '2018-12-10', '2018-12-11', '2018-12-12', '2018-12-13', '2018-12-14', '2018-12-15', '2018-12-16', '2018-12-17',]


    return (

        <>
            <div className="container-fluid">

                <div className="row">
                    <div className="chart_left col-md-5 card p-2 h-100" style={{ width: "700px" }}>
                        <h4>Ticket Solving By Agent</h4>
                        <Bar data={userData} options={userData.options} />
                    </div>
                    <div className="col-md-5">
                        <Linechart day={day} bg="hsl(273deg 80% 58%" />
                        <Linechart day={day} bg="#76a700" />
                    </div>
                </div>
            </div>
        </>
    )

})

export default Charts;