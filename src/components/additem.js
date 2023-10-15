import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    name: "",
    price: 0,
    rating: 0,
    category: "",
    subcategory: "",
    picture: null,
  });

  const sendData = async () => {
    const formData = new FormData();

    for (let value in input) {
      formData.append(value, input[value]);
    }
    formData.append("image", input.picture.name);
    console.log(formData);

    const response = await fetch("http://localhost:5000/products/new", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <center>
        <input
          type="text"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          placeholder="name"
        />
        <br />
        <br />

        <input
          type="number"
          value={input.price}
          onChange={(e) => setInput({ ...input, price: e.target.value })}
          placeholder="price"
        />

        <br />
        <br />
        <input
          type="number"
          value={input.rating}
          onChange={(e) => setInput({ ...input, rating: e.target.value })}
          placeholder="rating"
        />
        <br />
        <br />
        <input
          type="text"
          value={input.category}
          onChange={(e) => setInput({ ...input, category: e.target.value })}
          placeholder="category"
        />

        <br />
        <br />
        <input
          type="text"
          value={input.subcategory}
          onChange={(e) => setInput({ ...input, subcategory: e.target.value })}
          placeholder="subcategory"
        />
        <br />
        <br />
        <input
          type="file"
          onChange={(e) => setInput({ ...input, picture: e.target.files[0] })}
        />
        <br />
        <button onClick={sendData}>SEnd</button>
      </center>
    </div>
  );
}

export default App;
