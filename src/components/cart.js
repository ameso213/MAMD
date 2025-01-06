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
