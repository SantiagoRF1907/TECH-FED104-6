import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderChips, setOrderChips] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (!name || !email || !agreedToTerms) {
      alert("Please fill all the required fields.");
    } else {
      // Alert the order details if form is filled
      alert(
        `Order name: ${name}. The email is ${email}. I want chips: ${orderChips}. Any special requests? ${specialRequests}`
      );
    }
  };

  return (
    <div>
      <h2>Order a hamburger:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>* Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>* Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>--Do you want to order chips?--</label>
          <select
            value={orderChips}
            onChange={(e) => setOrderChips(e.target.value)}
          >
            <option value="">--Choose--</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label>Special requests?</label>
          <textarea
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="Any special requests?"
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            * I have read and agreed to the terms and conditions
          </label>
        </div>
        <button type="submit">Make an order!</button>
      </form>
    </div>
  );
}

export default App;
