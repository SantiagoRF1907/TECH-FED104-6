import React from "react";

function App() {
  const products = [
    {
      name: "Product 1",
      description: "Description of product 1",
      price: "$10.99",
    },
    {
      name: "Product 2",
      description: "Description of product 2",
      price: "$24.99",
    },
    {
      name: "Product 3",
      description: "Description of product 3",
      price: "$15.49",
    },
  ];

  const ProductContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  };

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>
            {product.name}
          </div>
          <div>{product.description}</div>
          <div style={{ color: "red" }}>{product.price}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
