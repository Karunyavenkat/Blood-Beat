// src/BloodInventory.js
import React, { useState } from 'react';
import '../assets/css/Inventory.css';
import Ap from '../assets/images/A+.png';
import An from '../assets/images/a-.png';
import Bp from '../assets/images/b+.png';
import Bn from '../assets/images/b-.png';
import Op from '../assets/images/o+.png';
import On from '../assets/images/o-.png';
import { NavBar } from '../components/Navbar';
import Footer from '../components/Footer';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const bloodInventory = [
    { group: 'A+', available: 56, bank: 'Apollo Hospital', contact: '7787678764', email: 'contact@apollo.com', city: 'Chennai', logo: Ap },
    { group: 'A+', available: 38, bank: 'Fortis Malar', contact: '89878898765', email: 'contact@fortismalar.com', city: 'Chennai', logo: Ap },
    { group: 'A-', available: 30, bank: 'PSG Hospitals', contact: '89878898765', email: 'contact@psghospitals.com', city: 'Coimbatore', logo: An },
    { group: 'B+', available: 40, bank: 'Ganga Hospital', contact: '7787678764', email: 'contact@ganga.com', city: 'Coimbatore', logo: Bp },
    { group: 'B-', available: 30, bank: 'KMCH', contact: '89878898765', email: 'contact@kmch.com', city: 'Coimbatore', logo: Bn },
    { group: 'O+', available: 30, bank: 'SRM Hospital', contact: '7787678764', email: 'contact@srmhospital.com', city: 'Chennai', logo: Op },
    { group: 'O-', available: 30, bank: 'MIOT International', contact: '7787678764', email: 'contact@miot.com', city: 'Chennai', logo: On },
  ];

  const filteredBloodInventory = bloodInventory.filter(item =>
    item.group.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.bank.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <NavBar/>
    <div className="blood-inventory">
      <header>
        <h1>Blood Inventory</h1>
      </header>
      <section>
        <p>These are all available blood. Kindly click on the bloods to see the details of it.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Blood Group/City/Hospital"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => setSearchTerm('')}>Reset</button>
        </div>
        <div className="inventory-list">
          {filteredBloodInventory.map((item, index) => (
            <div key={index} className="inventory-item">
              <img src={item.logo} alt={`${item.group} Icon`} />
              <div>
                <h2>{item.group} ({item.available} Available)</h2>
                <p>Blood Bank: {item.bank}</p>
                <p>Contact: {item.contact}</p>
                <p>Email: {item.email}</p>
                <p>City: {item.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
          <Footer/>
    </div>
  );
};

export default Inventory;
