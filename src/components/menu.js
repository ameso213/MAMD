import React, { useState } from 'react';
import './menu.css';

const Menu = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item} added to cart!`);
  };

  const categories = [
    {
      name: 'Wraps',
      products: [
        { name: 'Chicken Wrap', price: 'Rs. 200', image: '/images/w.avif' },
        { name: 'Veggie Wrap', price: 'Rs. 180', image: '/images/wap.avif' },
        { name: 'Paneer Wrap', price: 'Rs. 220', image: '/images/wapp.avif' },
        { name: 'Egg Wrap', price: 'Rs. 190', image: '/images/wp.avif' },
      ],
    },
    {
      name: 'Breakfast',
      products: [
        { name: 'Pancakes', price: 'Rs. 250', image: '/images/pancakes.jpg' },
        { name: 'Omelette', price: 'Rs. 150', image: '/images/omelette.jpg' },
        { name: 'French Toast', price: 'Rs. 200', image: '/images/french-toast.jpg' },
        { name: 'Smoothie Bowl', price: 'Rs. 300', image: '/images/smoothie-bowl.jpg' },
      ],
    },
    {
      name: 'Meals',
      products: [
        { name: 'Grilled Chicken', price: 'Rs. 500', image: '/images/grilled-chicken.jpg' },
        { name: 'Veg Meal', price: 'Rs. 400', image: '/images/veg-meal.jpg' },
        { name: 'Fish Curry Meal', price: 'Rs. 550', image: '/images/fish-curry.jpg' },
        { name: 'Mutton Curry Meal', price: 'Rs. 650', image: '/images/mutton-curry.jpg' },
      ],
    },
    {
      name: 'Curries',
      products: [
        { name: 'Butter Chicken', price: 'Rs. 350', image: '/images/butter-chicken.jpg' },
        { name: 'Paneer Masala', price: 'Rs. 300', image: '/images/paneer-masala.jpg' },
        { name: 'Dal Tadka', price: 'Rs. 200', image: '/images/dal-tadka.jpg' },
        { name: 'Chicken Curry', price: 'Rs. 320', image: '/images/chicken-curry.jpg' },
      ],
    },
    {
      name: 'Drinks',
      products: [
        { name: 'Lemonade', price: 'Rs. 100', image: '/images/lemonade.jpg' },
        { name: 'Cold Coffee', price: 'Rs. 150', image: '/images/cold-coffee.jpg' },
        { name: 'Mango Shake', price: 'Rs. 180', image: '/images/mango-shake.jpg' },
        { name: 'Iced Tea', price: 'Rs. 120', image: '/images/iced-tea.jpg' },
      ],
    },
    {
      name: 'Snacks',
      products: [
        { name: 'Samosa', price: 'Rs. 50', image: '/images/samosa.jpg' },
        { name: 'Spring Roll', price: 'Rs. 100', image: '/images/spring-roll.jpg' },
        { name: 'Chicken Wings', price: 'Rs. 200', image: '/images/chicken-wings.jpg' },
        { name: 'Nachos', price: 'Rs. 150', image: '/images/nachos.jpg' },
      ],
    },
  ];

  return (
    <div className="menu-container">
      {/* Top Banner with Swiping Images */}
      <div className="banner">
        <div className="banner-images">
          <img src="/images/fod.avif" alt="Top Banner 1" />
          <img src="/images/snk.avif" alt="Top Banner 2" />
          <img src="/images/sos.avif" alt="Top Banner 3" />
          <img src="/images/tea.jpg" alt="Top Banner 4" />
        </div>
      </div>

      {/* Food Categories */}
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.name}</h2>
          <div className="category-products">
            {category.products.map((product, idx) => (
              <div key={idx} className="menu-item">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <button onClick={() => handleAddToCart(product.name)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
