import React from 'react'
import { useState } from 'react';

const Navbar = () => {
    const [currentDate, setCurrentDate] = useState('');

    const updatetime = () => {
        var day = new Date().toUTCString(); //Current Month

        setCurrentDate(
            day.split('GMT')
        );
    }
    setInterval(updatetime, 1000);


    return (
        <nav className="navbar navfix navbar-expand-lg" style={{ backgroundColor: "#76a700" }}>
            <div className="container-fluid" style={{ backgroundColor: "#76a700" }}>
                <a className="navbar-brand" href="/">Daily Operational</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <div className="time">Berlin Local Time:{currentDate}</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar