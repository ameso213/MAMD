// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import Profile from './components/profile';
import Home from './components/home'
import Menu from './components/menu';
import Auth from './components/login';
import OrderPage from './components/order';
import Feedback from './components/feedback';
 import PrivacyPolicy from './components/privacy';
import TermsOfUse from './components/terms';
// import SocialMedia from './components/media';
import Cart from './components/cart';
// import ContactUs from './components/contact';
import Footer from './components/footer';
import ContactUs from './components/contact';


const App = () => {
  return (
    <div>
      <Profile />
      <Home/>
      <Menu/>
      <Auth/>
      <Cart/>
      <OrderPage/>
      <Feedback/>
       <ContactUs/> 
      <Footer/>
      
       <TermsOfUse/>
      <PrivacyPolicy/>
       {/* <SocialMedia/>   */}
      {/* <Cart/> */}
    </div>
  );
};

export default App;
