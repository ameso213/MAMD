// import React from 'react';

// const Cart = ({ cartItems, removeItemFromCart, proceedToOrderPage }) => {
//   const total = cartItems.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         cartItems.map((item, index) => (
//           <div key={index} style={{ marginBottom: '10px' }}>
//             <h3>{item.name}</h3>
//             <p>${item.price}</p>
//             <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
//           </div>
//         ))
//       )}
//       {cartItems.length > 0 && (
//         <div>
//           <h3>Total: ${total.toFixed(2)}</h3>
//           <button onClick={proceedToOrderPage}>Proceed to Order</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;













import React, { useState } from "react";

import "./cart.css";

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Pizza Calzone European",
            size: "14\"",
            price: 64,
            quantity: 2,
            image: "https://via.placeholder.com/100", // Replace with actual image URL
        },
        {
            id: 2,
            name: "Pizza Calzone European",
            size: "14\"",
            price: 32,
            quantity: 1,
            image: "https://via.placeholder.com/100", // Replace with actual image URL
        },
    ]);

    const handleQuantityChange = (id, action) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: action === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
                      }
                    : item
            )
        );
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="max-w-md mx-auto bg-gray-800 text-white rounded-2xl p-4">
            <header className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Cart</h2>
                <button className="text-orange-400 text-sm">Edit Items</button>
            </header>

            {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 mb-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
                    <div className="flex-1">
                        <h3 className="text-sm font-bold">{item.name}</h3>
                        <p className="text-sm">{item.size}</p>
                        <p className="text-sm font-bold">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleQuantityChange(item.id, "decrement")}
                            className="w-6 h-6 bg-gray-700 text-white rounded-full flex justify-center items-center"
                        >
                            -
                        </button>
                        <span className="text-sm font-bold">{item.quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(item.id, "increment")}
                            className="w-6 h-6 bg-gray-700 text-white rounded-full flex justify-center items-center"
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}

            <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-gray-400">Delivery Address</p>
                    <button className="text-orange-400 text-sm">Edit</button>
                </div>
                <p className="text-sm">2118 Thornridge Cir. Syracuse</p>
            </div>

            <div className="flex justify-between items-center my-4">
                <p className="text-lg font-bold">Total:</p>
                <p className="text-lg font-bold">${total}</p>
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-bold">Place Order</button>
        </div>
    );
};

export default Cart;
