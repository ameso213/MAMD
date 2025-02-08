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
        { name: 'Juice', price: 'Rs. 250', image: '/images/bk1.avif' },
        { name: 'Dry Tea', price: 'Rs. 150', image: '/images/bk3.jpg' },
        { name: 'Milk Tea', price: 'Rs. 200', image: '/images/bk2.avif' },
        { name: 'Coffee', price: 'Rs. 300', image: '/images/bk4.avif' },
      ],
    },
    {
      name: 'Meals',
      products: [
        { name: 'Chicken & Rice', price: 'Rs. 500', image: '/images/ck1.avif' },
        { name: 'Fish & Rice', price: 'Rs. 400', image: '/images/ck2.jpg' },
        { name: 'Beef & Rice', price: 'Rs. 550', image: '/images/ckkk.jpeg' },
        { name: 'Beans & Rice', price: 'Rs. 650', image: '/images/ck3.jpg' },
      ],
    },
    {
      name: 'Curries',
      products: [
        { name: 'Butter Chicken', price: 'Rs. 350', image: '/images/a.jpg' },
        { name: 'Paneer Masala', price: 'Rs. 300', image: '/images/cc.jpg' },
        { name: 'Dal Tadka', price: 'Rs. 200', image: '/images/ccc.jpg' },
        { name: 'Chicken Curry', price: 'Rs. 320', image: '/images/cccccc.jpg' },
      ],
    },
    {
      name: 'Drinks',
      products: [
        { name: 'Sodas', price: 'Rs. 100', image: '/images/pkk.avif' },
        { name: 'Lemone Juice', price: 'Rs. 150', image: '/images/pk.jpg' },
        { name: 'Whine & Beers', price: 'Rs. 180', image: '/images/pkkk.avif' },
        { name: 'Pineapple Juice', price: 'Rs. 120', image: '/images/pp.jpg' },
      ],
    },
    {
      name: 'Snacks',
      products: [
        { name: 'Samosa', price: 'Rs. 50', image: '/images/s.avif' },
        { name: 'Chapati', price: 'Rs. 100', image: '/images/ss.jpg' },
        { name: 'Sausage', price: 'Rs. 200', image: '/images/sss.avif' },
        { name: 'Pizza', price: 'Rs. 150', image: '/images/f.avif' },
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
