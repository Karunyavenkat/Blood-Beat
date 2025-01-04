import React from 'react';
import './DonorList.css';

const DonorList = () => {
    const donors = [
        { name: 'John Doe', bloodGroup: 'A+', contact: '1234567890' },
        { name: 'Jane Smith', bloodGroup: 'O-', contact: '0987654321' },
        { name: 'Alice Johnson', bloodGroup: 'B+', contact: '5678901234' },
        // Add more donors here
    ];

    return (
        <div className="donor-list">
            <h2>Donor List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Blood Group</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {donors.map((donor, index) => (
                        <tr key={index}>
                            <td>{donor.name}</td>
                            <td>{donor.bloodGroup}</td>
                            <td>{donor.contact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DonorList;
