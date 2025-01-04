import React from 'react';
import '../assets/css/About.css';
import missionImage from '../assets/images/mission.png';
import visionImage from '../assets/images/vision.png';
import whatWeDoImage from '../assets/images/whatwedo.jpg';
import { NavBar } from '../components/Navbar';
import Footer from '../components/Footer';
import AdminDashboard from '../DashBoard/AdminDashBoard';

const About = () => {
    return (
      <div>
        <NavBar/>
        <div className="about-container">
            <div className="about-header">
                <h1>About Us</h1>
            </div>
            <div className="about-content">
                <h2>Welcome to Life-Savers Blood Bank</h2>
                <p>
                    At Life-Savers Blood Bank, our mission is to provide a reliable and efficient blood donation service 
                    that ensures a steady supply of safe and high-quality blood to hospitals and medical facilities. We 
                    are dedicated to saving lives and improving health outcomes through the power of voluntary blood 
                    donation.
                </p>
                <h3>Our Mission</h3>
                <img src={missionImage} alt="Our Mission" className="content-image" />
                <p>
                    Our mission is to promote and facilitate voluntary blood donations, ensuring that every patient in 
                    need receives the life-saving blood they require. We strive to create a community of committed donors 
                    who understand the critical role they play in healthcare and are motivated to give the gift of life 
                    regularly.
                </p>
                <h3>Our Vision</h3>
                <img src={visionImage} alt="Our Vision" className="content-image" />
                <p>
                    We envision a world where no one suffers due to the unavailability of blood. Our goal is to build a 
                    robust blood donation system that can respond to any emergency, support ongoing medical treatments, 
                    and contribute to better health outcomes for all.
                </p>
                <h3>What We Do</h3>
                <img src={whatWeDoImage} alt="What We Do" className="content-image" />
                <p><strong>Blood Collection:</strong> We organize regular blood donation drives and operate fixed donation centers to collect blood from voluntary donors.</p>
                <p><strong>Processing and Testing:</strong> Every unit of donated blood undergoes rigorous testing and processing to ensure it is safe and ready for transfusion.</p>
                <p><strong>Distribution:</strong> We maintain a reliable supply chain to distribute blood and blood components to hospitals and clinics efficiently and promptly.</p>
                <p><strong>Awareness and Education:</strong> We conduct awareness campaigns and educational programs to inform the public about the importance of blood donation and to encourage more people to become donors.</p>
            </div>
        </div>
        <Footer/>
        <AdminDashboard/>
      </div>
    );
};

export default About;
