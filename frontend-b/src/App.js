import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BloodRequest from './pages/BloodRequest';
import BloodDonor from './pages/BloodDonor';
import HospitalList from './pages/HospitalList';
import About from './pages/About';
import BloodBankList from './pages/BloodBankList';
import Inventory from './pages/Inventory';
import Contact from './pages/Contact';
import BloodSupply from './components/BloodSupply';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminLogin from './pages/AdminLogin';
import Account from './pages/Account';
import TermsAndConditions from './components/TermsAndConditions';
import HospitalTable from './components/HospitalTable';
import BloodBankTable from './components/BloodBankTable';
import AdminDashboard from './DashBoard/AdminDashBoard';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/requests" element={<BloodRequest/>}/>
          <Route path="/donor" element={<BloodDonor/>}/>
          <Route path="/hospitals" element={<HospitalList/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
          <Route path="/blood_bank" element={<BloodBankList/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blood-supply" element={<BloodSupply/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/AdminLogin" element={<AdminLogin/>}/>
          <Route path="/UserRegister" element={<Login/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/Donor-terms" element={<TermsAndConditions/>}/>
          <Route path="/seeker-terms" element={<TermsAndConditions/>}/>
          <Route path="/hospital/:name" element={<HospitalTable />} />
          <Route path="/bloodbank/:name" element={<BloodBankTable />} />
          <Route path='/dashboard' element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
