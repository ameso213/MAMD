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
import Menu from './components/menu';
import Auth from './components/login';
import OrderPage from './components/order';
import PrivacyPolicy from './components/privacy';
import TermsOfUse from './components/terms';
import SocialMedia from './components/media';
//import Cart from './components/cart';


const App = () => {
  return (
    <div>
      <Profile />
      <Menu/>
      <Auth/>
      <OrderPage/>
      <PrivacyPolicy/>
      <TermsOfUse/>
      <SocialMedia/>
      {/* <Cart/> */}
    </div>
  );
};

export default App;
