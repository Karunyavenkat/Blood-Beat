import React from 'react';
import '../assets/css/HospitalTable.css';
import { useParams } from 'react-router-dom';
import { NavBar } from './Navbar';
import Footer from './Footer';

const hospitalsData = [
  {
    id: 1,
    name: 'Apollo Hospital (Chennai)',
    contact: '04428293333',
    email: 'contact@apollochennai.com',
    address: "123 Main St", 
    city: "Chennai", 
    state: "Tamil Nadu", 
    pincode: "600001" ,
    services: 'Emergency, Cardiology, Neurology',
    capacity: '500 beds',
    specialities: 'Heart Surgery, Organ Transplant',
    timings: '24/7'
  },
  {
    id: 2,
    name: 'Fortis Malar Hospital (Chennai)',
    contact: '04442892222',
    email: 'contact@fortismalar.com',
    address: "123 Main St", 
    city: "Chennai", 
    state: "Tamil Nadu", 
    pincode: "600001" ,
    services: 'Emergency, Orthopedics, Pediatrics',
    capacity: '400 beds',
    specialities: 'Joint Replacement, Pediatric Surgery'
  },
  // Add more hospitals as needed
];

const HospitalTable = () => {
    const { name } = useParams();
    const hospital = hospitalsData.find(h => h.name === decodeURIComponent(name));

    return (
        <div>
            <NavBar/>
        <div className="hospital-details-container">
            <h1>Details of {hospital.name}</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Column</th>
                        <th>Data</th>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{hospital.name}</td>
                    </tr>
                    <tr>
                        <td>Contact</td>
                        <td>{hospital.contact}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{hospital.email}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{hospital.address}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{hospital.city}</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>{hospital.state}</td>
                    </tr>
                    <tr>
                        <td>Pincode</td>
                        <td>{hospital.pincode}</td>
                    </tr>
                    <tr>
                        <td>Service</td>
                        <td>{hospital.services}</td>
                    </tr>
                    <tr>
                        <td>Capacity</td>
                        <td>{hospital.capacity}</td>
                    </tr>
                    <tr>
                        <td>Specialities</td>
                        <td>{hospital.specialities}</td>
                    </tr>
                </tbody>
            </table>
        </div>
            <Footer/>
        </div>
    );
};

export default HospitalTable;
