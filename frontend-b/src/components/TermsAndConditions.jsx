import React from 'react';
import '../assets/css/TermsAndConditions.css';

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>Welcome to our blood donation and blood seeker platform. By accessing or using our services, you agree to be bound by these terms and conditions.</p>
      
      <h2>Blood Donor Terms</h2>
      <ul>
        <li>Donors must be between 18 and 65 years old and weigh at least 50 kg.</li>
        <li>Donors must be in good health and free from transmissible diseases.</li>
        <li>Donors must not have donated blood in the last 3 months.</li>
        <li>Donors must undergo a medical screening process and consent to blood testing.</li>
        <li>Donors' personal information will be kept confidential and used for medical purposes only.</li>
        <li>Donors have the right to withdraw from the donation process at any time.</li>
        <li>Donated blood may be used for transfusions, research, or other medical purposes.</li>
        <li>The blood bank is not liable for any adverse reactions, provided standard medical practices are followed.</li>
      </ul>

      <h2>Blood Seeker Terms</h2>
      <ul>
        <li>Blood seekers must provide valid identification and proof of medical necessity.</li>
        <li>Seekers must comply with hospital or blood bank policies and procedures.</li>
        <li>Accurate medical information must be provided to ensure safety and compatibility.</li>
        <li>Personal and medical information will be kept confidential and used for transfusion purposes only.</li>
        <li>Seekers must provide informed consent to receive a blood transfusion and understand associated risks and benefits.</li>
        <li>Seekers' information may be shared with relevant medical personnel for proper care.</li>
        <li>Seekers are responsible for following post-transfusion care instructions.</li>
        <li>The blood bank or hospital is not liable for any adverse reactions, provided standard medical practices are followed.</li>
      </ul>

      <h2>General Terms</h2>
      <ul>
        <li>These terms and conditions may be updated periodically, and users will be informed of significant changes.</li>
        <li>These terms are governed by the laws of the respective jurisdiction.</li>
        <li>For questions or concerns, please contact [Blood Bank/Hospital Contact Information].</li>
      </ul>
    </div>
  );
}

export default TermsAndConditions;
