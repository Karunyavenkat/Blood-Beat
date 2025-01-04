import React from 'react';
import Statistics from './Statistics';
import BloodInventory from './BloodInventory';
import DonorList from './DonorList';
import './DashboardContent.css';

const DashboardContent = () => {
    return (
        <div className="dashboard-content">
            <Statistics />
            <BloodInventory />
            <DonorList />
        </div>
    );
};

export default DashboardContent;
