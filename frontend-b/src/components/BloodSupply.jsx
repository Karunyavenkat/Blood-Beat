// import React from 'react';
// import '../assets/css/BloodSupply.css';
// import { NavBar } from '../components/Navbar';
// import Footer from '../components/Footer';

import React, { useState } from 'react';
import '../assets/css/BloodSupply.css';
import { NavBar } from './Navbar';
import Footer from './Footer';

const bloodData = {
    'All Australia': [
        { type: 'A+', level: 'Good' },
        { type: 'A-', level: 'Good' },
        { type: 'AB+', level: 'Not collected' },
        { type: 'AB-', level: 'Not collected' },
        { type: 'B+', level: 'Good' },
        { type: 'B-', level: 'Not collected' },
        { type: 'O+', level: 'OK' },
        { type: 'O-', level: 'Good' }
    ],
    'Tamil Nadu': [
        { type: 'A+', level: 'Need more' },
        { type: 'A-', level: 'Need more' },
        { type: 'AB+', level: 'Good' },
        { type: 'AB-', level: 'Good' },
        { type: 'B+', level: 'Good' },
        { type: 'B-', level: 'OK' },
        { type: 'O+', level: 'Low' },
        { type: 'O-', level: 'Need more' }
    ],
    'Kerala': [
        { type: 'A+', level: 'Low' },
        { type: 'A-', level: 'Good' },
        { type: 'AB+', level: 'Low' },
        { type: 'AB-', level: 'Good' },
        { type: 'B+', level: 'OK' },
        { type: 'B-', level: 'Good' },
        { type: 'O+', level: 'Need more' },
        { type: 'O-', level: 'Good' }
    ],
    'Karnataka': [
        { type: 'A+', level: 'OK' },
        { type: 'A-', level: 'Need more' },
        { type: 'AB+', level: 'Good' },
        { type: 'AB-', level: 'Low' },
        { type: 'B+', level: 'Need more' },
        { type: 'B-', level: 'OK' },
        { type: 'O+', level: 'Good' },
        { type: 'O-', level: 'Low' }
    ],
    'Andhra Pradesh': [
        { type: 'A+', level: 'Good' },
        { type: 'A-', level: 'OK' },
        { type: 'AB+', level: 'Need more' },
        { type: 'AB-', level: 'Good' },
        { type: 'B+', level: 'Low' },
        { type: 'B-', level: 'Good' },
        { type: 'O+', level: 'OK' },
        { type: 'O-', level: 'Need more' }
    ],
    'Telangana': [
        { type: 'A+', level: 'Need more' },
        { type: 'A-', level: 'Low' },
        { type: 'AB+', level: 'OK' },
        { type: 'AB-', level: 'Good' },
        { type: 'B+', level: 'Need more' },
        { type: 'B-', level: 'Good' },
        { type: 'O+', level: 'Low' },
        { type: 'O-', level: 'OK' }
    ],
};

const getDropClass = (level) => {
    switch (level) {
        case 'Need more':
            return 'drop need-more';
        case 'Low':
            return 'drop low';
        case 'OK':
            return 'drop ok';
        case 'Good':
            return 'drop good';
        case 'Not collected':
            return 'drop not-collected';
        default:
            return 'drop';
    }
};

const BloodSupply = () => {
    const [selectedRegion, setSelectedRegion] = useState('All Australia');

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
    };

    return (
        <div>
            <NavBar/>
        <div className="blood-supply-levels">
            <h1>Current red cell supply levels</h1>
            <p>Updated 6:00am , 30 July 2024</p>
            <div className="dropdown">
                <select value={selectedRegion} onChange={handleRegionChange}>
                    {Object.keys(bloodData).map((region) => (
                        <option key={region} value={region}>{region}</option>
                    ))}
                </select>
            </div>
            <br /><br />
            <div className="drops-container">
                {bloodData[selectedRegion].map((blood) => (
                    <div key={blood.type} className="blood-type">
                        <div className={getDropClass(blood.level)}></div>
                        <p>{blood.type}</p>
                        <p>{blood.level}</p>
                    </div>
                ))}
            </div>
        </div><br /><br />
            <Footer/>
        </div>
    );
};

export default BloodSupply;

