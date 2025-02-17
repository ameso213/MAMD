import React from "react";
import './home.css';
const HomePage = () => {
  return (
    <div className="bg-white font-sans">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-red-900 to-red-700 text-white py-6 px-8 flex justify-between items-center">
        <div className="flex items-center">
          {/* <img src="/images/logo.png" alt="Logo" className="h-10" /> */}
        </div>
        {/* <nav className="space-x-6">
          <a href="#" className="text-yellow-400">Menu</a>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Profile</a>
        </nav> */}
        <div className="flex space-x-4 text-yellow-400">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </header>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 to-red-700 text-white text-center py-16">
        <h2 className="text-4xl font-bold">Tastes more delicious like your mother’s</h2>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-md">
          Order Now!
        </button>
      </div>

      {/* Special Foods Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-red-800">OUR SPECIAL FOODS</h2>
        <div className="grid grid-cols-3 gap-6 mt-8">
          {menuItems.map((item) => (
            <div key={item.title} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-red-800 text-white font-bold rounded-lg shadow-md">
          View All
        </button>
      </section>
    </div>
  );
};

const menuItems = [
  { title: "BREAKFAST", image: "/images/breakfast.jpg" },
  { title: "SNACKS", image: "/images/snacks.jpg" },
  { title: "MEALS", image: "/images/meals.jpg" },
  { title: "WRAPS", image: "/images/wraps.jpg" },
  { title: "DRINKS", image: "/images/drinks.jpg" },
  { title: "CURRIES", image: "/images/curries.jpg" },
];

export default HomePage;
