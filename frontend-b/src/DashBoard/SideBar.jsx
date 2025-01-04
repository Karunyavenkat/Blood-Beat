import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Admin Dashboard</h2>
            <ul>
                <li>Home</li>
                <li>Manage Blood Inventory</li>
                <li>Donor List</li>
                <li>Requests</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </div>
    );
};

export default Sidebar;
