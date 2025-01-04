import React from 'react';

import './AdminDashboard.css';
import Sidebar from './SideBar';
import Header from './Header';
import DashboardContent from './DashboardContent';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <Sidebar />
            <div className="main-content">
                <Header />
                <DashboardContent />
            </div>
        </div>
    );
};

export default AdminDashboard;
