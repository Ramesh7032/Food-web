import React, { useState, useEffect } from "react";
import "./All.css";

function MenuItems({ selectedCat }) {
  const [items, setItems] = useState([]);
  const [intialItems, setInitialItems] = useState([]);
  const [isShowMore, setIsShowMore] = useState(false);

  useEffect(() => {
    setIsShowMore(false);
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        if (selectedCat === "all") {
          setItems(data);
          const only6Items = data.slice(0, 6);
          setInitialItems(only6Items);
        } else {
          const filtered = data.filter((item) => item.category == selectedCat);
          setItems(filtered);
          const only6Items = filtered.slice(0, 6);
          setInitialItems(only6Items);
        }

        // const filtered = items.filter((item) => item.category === selectedCat);
        // console.log(filtered);
        // setItems(filtered);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, [selectedCat]);
  console.log(intialItems);
  return (
    <div className="food-all">
      <div className="all-div">
        {isShowMore
          ? items.map((item) => (
              <div className="div-item" key={item.id}>
                <center>
                  <img
                    src={`http://localhost:5000/assets/${item.image}`}
                    alt={item.name}
                  />
                  <h3>{item.name}</h3>
                </center>
                <div className="item-details">
                  <div className="items">
                    <p> RS: {item.price}</p>
                    <p>Rating: {item.rating}</p>
                  </div>
                  <div className="all-btn">
                    <button> Order</button>
                  </div>
                </div>
              </div>
            ))
          : intialItems.map((item) => (
              <div className="div-item" key={item.id}>
                <center>
                  <img
                    src={`http://localhost:5000/assets/${item.image}`}
                    alt={item.name}
                  />
                  <h3>{item.name}</h3>
                </center>
                <div className="item-details">
                  <div className="items">
                    <p> RS: {item.price}</p>
                    <p>Rating: {item.rating}</p>
                  </div>
                  <div className="all-btn">
                    <button> Order</button>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div className="show-more-div">
        {items.length > 6 && (
          <button onClick={() => setIsShowMore(!isShowMore)}>
            {isShowMore ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuItems;
