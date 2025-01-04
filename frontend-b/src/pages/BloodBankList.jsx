// src/BloodBankList.js
import React, { useState } from 'react';
// import '../assets/css/BloodBankList.css';
// import blood_drop from '../assets/images/blood-drop.jpg';
// import { NavBar } from '../components/Navbar';
// import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/Navbar';
import Footer from '../components/Footer';


//   const [searchTerm, setSearchTerm] = useState('');

  const bloodBanks = [
    { name: 'Life Care Blood Bank', location: 'Chennai', contact: '9876543210', email: 'lifecare@bloodbank.com' },
    { name: 'Red Cross Blood Bank', location: 'Coimbatore', contact: '9876543211', email: 'redcross@bloodbank.com' },
    { name: 'Apollo Blood Bank', location: 'Madurai', contact: '9876543212', email: 'apollo@bloodbank.com' },
    { name: 'Government Blood Bank', location: 'Trichy', contact: '9876543213', email: 'govt@bloodbank.com' },
    { name: 'Jeevan Blood Bank', location: 'Chennai', contact: '9876543214', email: 'jeevan@bloodbank.com' },
  ];

  

  // return (
  //   <div>

  //   <div>
  //       <NavBar/>
  //   <div className="blood-bank-list">
  //     <h1>All Blood Bank Lists</h1>
  //     <p>These are all available blood banks in Tamil Nadu. Kindly click on the banks to see the details of it.</p>
  //     <div className="search-bar">
  //       <input
  //         type="text"
  //         placeholder="Enter Bank Name"
  //         value={searchTerm}
  //         onChange={(e) => setSearchTerm(e.target.value)}
  //         />
  //       <button onClick={() => setSearchTerm('')}>Reset</button>
  //     </div>
  //     <div className="bank-list">
  //       {filteredBloodBanks.map((bank, index) => (
  //           <div key={index} className="bank-item">
  //           <img src={blood_drop} alt="Life Share Blood Bank" />
  //           <div>
  //             <h2>{bank.name} ({bank.location})</h2>
  //             <p>Contact: {bank.contact}</p>
  //             <p>Email: {bank.email}</p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
    
  //       </div>
  //       <Footer/>
  //   </div>
  // );
const BloodBankList = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredHospitals = bloodBanks.filter(bloodbank =>
      bloodbank.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
  };

  const handleReset = () => {
      setSearchQuery('');
  };

  const handleBloodBankClick = (bloodbank) => {
      navigate(`/bloodbank/${bloodbank.name}`, { state: { bloodbank } });
  };

  return (
    <div>
        <NavBar />
        <div className="hospital-list-container">
            <h1>All Blood Bank Lists</h1>
            <p>These are all available blood bank. Kindly click on the blood banks to see the details of it.</p>
            <div className="search-container">
                <label htmlFor="searchInput">Enter Blood Bank Name:</label>
                <input
                    type="text"
                    id="searchInput"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Enter Blood Bank Name"
                />
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className="hospital-list">
                {filteredHospitals.map((bloodbank, index) => (
                    <div 
                        key={index} 
                        className="hospital-item"
                        onClick={() => handleBloodBankClick(bloodbank)}
                    >
                        <h2>{bloodbank.name}</h2>
                        <p>Contact: {bloodbank.contact}</p>
                        <p>Email: {bloodbank.email}</p>
                        <div className="location">
                             {bloodbank.city}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
    );
}

export default BloodBankList;
