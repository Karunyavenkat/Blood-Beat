import React, { useState } from 'react';
import '../../src/assets/css/BloodRequest.css';
import { NavBar } from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BloodRequest= () => {
    // const [formData, setFormData] = useState({
    //     patientName: '',
    //     bloodGroup: '',
    //     patientAge: '',
    //     city: '',
    //     email: '',
    //     phoneNumber: '',
    //     hospitalAddress: '',
    //     description: '',
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Process the form data here (e.g., send it to a server)
    //     console.log(formData);
    // };

    // return (
    //     <div className='back'>
    //         <NavBar/>
    //         <br />
    //     <form onSubmit={handleSubmit} >
    //         <div>
    //             <div className='form-title'>
    //                 BLOOD REQUEST FORM
    //             </div>
    //             <label>Patient Name:</label>
    //             <input 
    //                 type="text" 
    //                 name="patientName" 
    //                 value={formData.patientName} 
    //                 onChange={handleChange} 
    //             />
    //         </div>
    //         <div>
    //             <label>Needed Blood Group:</label>
    //             <input 
    //                 type="text" 
    //                 name="bloodGroup" 
    //                 value={formData.bloodGroup} 
    //                 onChange={handleChange} 
    //             />
    //         </div>
    //         <div>
    //             <label>Patient Age:</label>
    //             <input 
    //                 type="number" 
    //                 name="patientAge" 
    //                 value={formData.patientAge} 
    //                 onChange={handleChange} 
    //             />
    //         </div>
    //         <div>
    //             <label>City:</label>
    //             <input 
    //                 type="text" 
    //                 name="city" 
    //                 value={formData.city} 
    //                 onChange={handleChange} 
    //             />
    //         </div>
    //         <div>
    //             <label>Email:</label>
    //             <input 
    //                 type="email" 
    //                 name="email" 
    //                 value={formData.email} 
    //                 onChange={handleChange} 
    //             />
    //         </div>
    //         <div>
    //             <label>Phone Number:</label>
    //             <input 
    //                 type="tel" 
    //                 name="phoneNumber" 
    //                 value={formData.phoneNumber} 
    //                 onChange={handleChange} 
    //             />
    //         </div>
    //         <div>
    //             <label>Hospital Address:</label>
    //             <textarea 
    //                 name="hospitalAddress" 
    //                 value={formData.hospitalAddress} 
    //                 onChange={handleChange}
    //             ></textarea>
    //         </div>
    //         <div>
    //             <label>Description:</label>
    //             <textarea 
    //                 name="description" 
    //                 value={formData.description} 
    //                 onChange={handleChange}
    //             ></textarea>
    //         </div>
    //         <button type="submit">Submit</button>
    //     </form><br />
    //         <Footer/>
    //     </div>
    // );

    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
        event.preventDefault();
        if (isChecked) {
        // Handle form submission logic here
        alert('Form submitted successfully!');
        }
        else{
            alert('Please accept the terms and conditions');
        }
    }
    return (
        <div>
            <NavBar/>
        <div className="form-container">
            <h2>BLOOD REQUEST FORM</h2>
            <form>
                <label htmlFor="donorName">Name:</label>
                <input type="text" id="donorName" name="donorName" required />

                <label htmlFor="bloodGroup">Select Needed Blood Group:</label>
                <select id="bloodGroup" name="bloodGroup" required>
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>

                <label htmlFor="donorAge">Select Age:</label>
                <select id="donorAge" name="donorAge" required>
                    <option value="">Select</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46-55">46-55</option>
                    <option value="56-65">56-65</option>
                    <option value="66+">66+</option>
                </select>

                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber" name="phoneNumber" required />

                <label htmlFor="address">Full Address:</label>
                <textarea id="address" name="address" rows="2" required></textarea>

                <label htmlFor="description">Reason</label>
                <textarea id="description" name="description" rows="4" required></textarea>

                {/* <button type="submit">Submit</button> */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        I agree to the <Link to="/seeker-terms">terms and conditions</Link>
                        </label>
                    </div><br />
                    <button type="submit" disabled={!isChecked}>
                        Submit
                    </button>
                    </form>
            </form>
        </div>
            <Footer/>
        </div>
    );
};

export default BloodRequest;
