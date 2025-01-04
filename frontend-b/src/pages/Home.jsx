import React, { useEffect, useState } from 'react'
import image1 from '../assets/images/banner3.png';
import image2 from '../assets/images/banner1.jpg';
import image3 from '../assets/images/banner4.png';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.jpg';
import level from '../assets/images/supply.png';
import { NavBar } from '../components/Navbar';
import '../assets/css/Home.css';
import Footer from '../components/Footer';
import BloodSupply from '../components/BloodSupply';
import { Link } from 'react-router-dom';

const images = [image1, image2, image3];

function Home () {

    const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <NavBar/>
        <div className='home-container'>
            <div className="home-header">
                <h2>Welcome to BloodBeat...!</h2>
                <p>Donating blood is an act of solidarity. Join the effort and save lives.</p>
            </div>
            <div className="background" style={{ backgroundImage: `url(${images[currentImage]})` }}>
            <div style={{ color: 'white', padding: '20px' }}></div>
            </div>
        </div>
        {/* <div className='home-header'>
                <h2>Welcome to BloodBride Blood Bank!</h2> 
                <p>We are dedicated to making a difference in our community by connecting donors with those in need. Our platform streamlines the donation process, ensuring that every drop counts. Whether you're a potential donor or a patient seeking assistance, our user-friendly system provides essential information and support, helping to save lives one donation at a time. Join us in our mission to create a healthier, more compassionate world.</p>
        </div> */}
        <div className="App">
          <div className="container">
            <div className="images">
              <img src={img1} alt="Donor 1" className="image"/>
              <img src={img2} alt="Donor 2" className="image"/>
              <img src={img3} alt="Donor 3" className="image"/>
              <img src={img4} alt="Donor 4" className="image"/>
            </div>
            <br /><br />
            <div className="text">
              <h1>Greatness is in you</h1>
              <p>
              Your journey to becoming a life-saver could start with a blood donation. Blood donation is a simple yet powerful act of kindness that has the potential to save lives. When you donate blood, you provide a vital resource that hospitals and medical facilities rely on to treat patients in need.</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
          </div>
        </div>
          <div className='blood-level'>
            <Link to="/blood-supply"><img src={level} alt="level"  className='supply'/></Link>
          </div>
        <Footer/>
    </div>
  )
}

export default Home; 
