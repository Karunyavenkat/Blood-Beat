import React, { useState } from 'react';
import '../assets/css/BloodDonor.css';
import { NavBar } from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BloodDonor = () => {

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
            <h2>BLOOD DONOR REGISTRATION FORM</h2>
            <form>
                <label htmlFor="donorName">Name:</label>
                <input type="text" id="donorName" name="donorName" required />

                <label htmlFor="bloodGroup">Select Blood Group:</label>
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

                <label htmlFor="description">Any Health Issues ?</label>
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
                        I agree to the <Link to="/Donor-terms">terms and conditions</Link>
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

export default BloodDonor;
// import React, { useState } from 'react';
// import '../assets/css/BloodDonor.css';
// import Footer from '../components/Footer';
// import { NavBar } from '../components/Navbar';

// const BloodDonor= () => {
//     const [formData, setFormData] = useState({
//         age: '',
//         city: '',
//         email: '',
//         phone: '',
//         address: '',
//         description: '',
//         termsAccepted: false
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (formData.termsAccepted) {
//             console.log(formData);
//             // Handle form submission
//         } else {
//             alert('You must accept the terms and conditions to submit the form.');
//         }
//     };

//     return (
//         <div>
//             <NavBar/>
//         <div className="donor-form-container">
//             <form onSubmit={handleSubmit} className="donor-form">
//                 <div className="form-group">
//                     <label htmlFor="age">Select Age:</label>
//                     <select id="age" name="age" value={formData.age} onChange={handleChange} required>
//                         <option value="">Select</option>
//                         <option value="18-25">18-25</option>
//                         <option value="26-35">26-35</option>
//                         <option value="36-45">36-45</option>
//                         <option value="46-60">46-60</option>
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="city">City:</label>
//                     <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="phone">Phone Number:</label>
//                     <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="address">Full Address:</label>
//                     <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows="2" required></textarea>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="description">Description/Requirements:</label>
//                     <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="3" required></textarea>
//                 </div>
//                 <div className="form-group checkbox-group">
//                     <input
//                         type="checkbox"
//                         id="terms"
//                         name="termsAccepted"
//                         checked={formData.termsAccepted}
//                         onChange={handleChange}
//                         required
//                         />
//                     <label htmlFor="terms">I accept the <a href="/terms" target="_blank" rel="noopener noreferrer">terms and conditions</a></label>
//                 </div>
//                 <button type="submit" className="submit-button">Submit</button>
//             </form><br />
//         </div>
//             <Footer/>
//         </div>
//     );
// };

// export default BloodDonor;
