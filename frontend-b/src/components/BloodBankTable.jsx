import React from 'react';
import '../assets/css/HospitalTable.css';
import { useParams } from 'react-router-dom';
import { NavBar } from './Navbar';
import Footer from './Footer';

const bankData = [
  {
    id: 1,
    name: 'Life Care Blood Bank',
    contact: '04428293333',
    email: 'contact@lifecare.com',
    address: "123 Main St", 
    city: "Chennai", 
    state: "Tamil Nadu", 
    pincode: "600001" ,
  },
  {
    id: 2,
    name: 'Red Cross Blood Bank',
    contact: '04442892222',
    email: 'contact@redcross.com',
    address: "123 Main St", 
    city: "Chennai", 
    state: "Tamil Nadu", 
    pincode: "600001" ,
  },
  // Add more hospitals as needed
];

const BloodBankTable = () => {
    const { name } = useParams();
    const bloodbank = bankData.find(h => h.name === decodeURIComponent(name));

    return (
        <div>
            <NavBar/>
        <div className="hospital-details-container">
            <h1>Details of {bloodbank.name}</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Column</th>
                        <th>Data</th>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{bloodbank.name}</td>
                    </tr>
                    <tr>
                        <td>Contact</td>
                        <td>{bloodbank.contact}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{bloodbank.email}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{bloodbank.address}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{bloodbank.city}</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>{bloodbank.state}</td>
                    </tr>
                    <tr>
                        <td>Pincode</td>
                        <td>{bloodbank.pincode}</td>
                    </tr>
                </tbody>
            </table>
        </div>
            <Footer/>
        </div>
    );
};

export default BloodBankTable;
