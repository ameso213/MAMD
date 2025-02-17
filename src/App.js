import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
// import Profile from './components/profile';
import Home from './components/home';
import Menu from './components/menu';

import OrderPage from './components/order';
import Feedback from './components/feedback';
import PrivacyPolicy from './components/privacy';
import TermsOfUse from './components/terms';
// import SocialMedia from './components/media';
import Cart from './components/cart';
// import ContactUs from './components/contact';
import Footer from './components/footer';
import ContactUs from './components/contact';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="nav-logo" alt="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/profile">Profile</Link></li> */}
        <li><Link to="/menu">Menu</Link></li>
        {/* <li><Link to="/cart">Cart</Link></li> */}
        <li><Link to="/order">Order</Link></li>
        {/* <li><Link to="/feedback">Feedback</Link></li> */}
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
