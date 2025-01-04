import React from 'react';
import './Statistics.css';

const Statistics = () => {
    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <div className="stat-card">
                <h3>Total Blood Units</h3>
                <p>150</p>
            </div>
            <div className="stat-card">
                <h3>Total Donors</h3>
                <p>75</p>
            </div>
            <div className="stat-card">
                <h3>Total Requests</h3>
                <p>25</p>
            </div>
        </div>
    );
};

export default Statistics;
