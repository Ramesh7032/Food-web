import React, { useState } from "react";

import MenuItems from "./MenuItems";

function Menu() {
  const [cat, setCat] = useState([
    { key: "all", display: true },
    { key: "seefood", display: false },
    { key: "veg", display: false },
    { key: "Nonveg", display: false },
    { key: "biryani", display: false },
    { key: "roti", display: false },
  ]);
  const [selectedCat, setSelectedCat] = useState("all");
  const toggleCategory = (category) => {
    const newCat = cat.map((c) => {
      return c.key === category
        ? { key: c.key, display: true }
        : { key: c.key, display: false };
    });
    setSelectedCat(category);
    setCat(newCat);
  };
  // console.log(selectedCat);
  return (
    <div>
      <div className="menu">
        <div className="menu-head">
          <p className="menu-head">Our Menu</p>
          <p className="menu-head1">
            Indulge in our diverse menu for an unforgettable dining journey.
          </p>
        </div>
      </div>
      <div className="menu-list">
        <button
          onClick={() => toggleCategory("all")}
          className={cat[0].display && "active"}
        >
          All
        </button>
        <button
          onClick={() => toggleCategory("seefood")}
          className={cat[1].display && "active"}
        >
          See Food
        </button>
        <button
          onClick={() => toggleCategory("veg")}
          className={cat[2].display && "active"}
        >
          Veg
        </button>
        <button
          onClick={() => toggleCategory("Nonveg")}
          className={cat[3].display && "active"}
        >
          Non Veg
        </button>
        <button
          onClick={() => toggleCategory("biryani")}
          className={cat[4].display && "active"}
        >
          Biryani
        </button>
        <button
          onClick={() => toggleCategory("roti")}
          className={cat[5].display && "active"}
        >
          Roti's
        </button>
      </div>
      <MenuItems selectedCat={selectedCat} />
    </div>
  );
}

export default Menu;
