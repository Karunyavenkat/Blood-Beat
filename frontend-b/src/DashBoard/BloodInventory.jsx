import React from 'react';
import './BloodInventory.css';

const BloodInventory = () => {
    const inventory = [
        { group: 'A+', quantity: 20 },
        { group: 'A-', quantity: 15 },
        { group: 'B+', quantity: 25 },
        { group: 'B-', quantity: 10 },
        { group: 'O+', quantity: 30 },
        { group: 'O-', quantity: 10 },
        { group: 'AB+', quantity: 25 },
        { group: 'AB-', quantity: 15 },
    ];

    return (
        <div className="blood-inventory">
            <h2>Manage Blood Inventory</h2>
            <table>
                <thead>
                    <tr>
                        <th>Blood Group</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map((item, index) => (
                        <tr key={index}>
                            <td>{item.group}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BloodInventory;
