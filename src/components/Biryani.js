import React, { useState, useEffect } from "react";

function All() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Filter products where the name contains "biryani"
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes("biryani")
  );

  return (
    <div className="food-all">
      <ul>
        {filteredProducts.map((product) => (
          <li key={product._id}>
            <div>
              <img
                src={`http://localhost:5000/assets/${product.image}`}
                alt={product.name}
              />
              <h2>{product.name}</h2>
              <p>Price: {product.price}</p>
              <p>Rating: {product.rating}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default All;
