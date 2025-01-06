import React, { useState } from "react";

const OrderPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash"); // Default to cash payment
  const [orderType, setOrderType] = useState("delivery"); // Default to delivery
  const [specialInstructions, setSpecialInstructions] = useState(""); // To track special instructions
  const [loading, setLoading] = useState(false); // Track if payment is in progress
  const [paymentStatus, setPaymentStatus] = useState(""); // To track payment status
  const [steps, setSteps] = useState([]); // To store the process steps

  const handlePlaceOrder = async () => {
    if (paymentMethod === "cash") {
      alert("Your order has been placed! Pay with cash upon delivery.");
      return;
    }

    // Simulate the Mobile Money payment process
    setLoading(true);
    setPaymentStatus("Processing...");
    setSteps([
      "Step 1: You will receive a payment prompt on your mobile.",
      "Step 2: Enter your mobile money PIN to authorize the payment.",
      "Step 3: Wait for the confirmation message.",
      "Step 4: Payment successful, you will receive an SMS confirmation.",
    ]);

    // Simulate the payment processing delay (e.g., API call to mobile money provider)
    setTimeout(() => {
      setPaymentStatus("Payment Successful!");
      // Simulate SMS notification sent after payment
      setSteps((prevSteps) => [...prevSteps, "Step 5: An SMS notification has been sent to your phone."]);
      setLoading(false);
    }, 5000); // Delay of 5 seconds to simulate payment processing
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "400px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", fontSize: "20px" }}>Your Order</h1>

      {/* Order Details Section */}
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>Order Details</h2>
        <p style={{ margin: "5px 0", fontSize: "12px" }}>Chicken Wraps</p> {/* Reduced font size */}
        <div style={{ display: "flex", justifyContent: "space-between", margin: "5px 0" }}>
          <span style={{ fontSize: "12px" }}>Subtotal</span> {/* Reduced font size */}
          <span style={{ fontSize: "12px" }}>$14.99</span> {/* Reduced font size */}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", margin: "5px 0" }}>
          <span style={{ fontSize: "12px" }}>Delivery Fee</span> {/* Reduced font size */}
          <span style={{ fontSize: "12px" }}>$2.99</span> {/* Reduced font size */}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", margin: "5px 0" }}>
          <span style={{ fontSize: "12px" }}>Service Fee</span> {/* Reduced font size */}
          <span style={{ fontSize: "12px" }}>$1.99</span> {/* Reduced font size */}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", fontWeight: "bold" }}>
          <span style={{ fontSize: "12px" }}>Total</span> {/* Reduced font size */}
          <span style={{ fontSize: "12px" }}>$19.97</span> {/* Reduced font size */}
        </div>
      </div>

      {/* Order Type Section (Pick Up / Delivery) */}
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>Order Type</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px" }}>
            <input
              type="radio"
              value="delivery"
              checked={orderType === "delivery"}
              onChange={(e) => setOrderType(e.target.value)}
            />
            Delivery
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px" }}>
            <input
              type="radio"
              value="pickup"
              checked={orderType === "pickup"}
              onChange={(e) => setOrderType(e.target.value)}
            />
            Pick Up
          </label>
        </div>
      </div>

      {/* Payment Method Section */}
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>Payment Method</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px" }}>
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px" }}>
            <input
              type="radio"
              value="mobile"
              checked={paymentMethod === "mobile"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Mobile Money
          </label>
        </div>
      </div>

      {/* Special Instructions Section */}
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>Special Instructions</h2>
        <textarea
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}
          placeholder="Add any special instructions here (e.g., allergies, delivery preferences, etc.)"
          rows="4"
          style={{
            width: "90%",  // Reduced width size
            padding: "10px",
            fontSize: "9px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginTop: "10px",
            resize: "none",
          }}
        />
      </div>

      {/* Instructions for Mobile Money Payment */}
      {paymentMethod === "mobile" && (
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "20px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0", fontSize: "16px" }}>Mobile Money Payment Process</h3>
          <div>
            {steps.map((step, index) => (
              <p key={index} style={{ margin: "5px 0", color: index === steps.length - 1 ? "green" : "#555", fontSize: "12px" }}>
                {step}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        disabled={loading}
        style={{
          width: "100%",
          backgroundColor: "gold",
          color: "white",
          padding: "15px",
          fontSize: "16px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {loading ? "Processing..." : "Place Order"}
      </button>

      {paymentStatus && (
        <p style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold", color: "green", fontSize: "12px" }}>
          {paymentStatus}
        </p>
      )}
    </div>
  );
};

export default OrderPage;
