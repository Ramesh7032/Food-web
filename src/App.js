import Additem from "./components/additem";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import MenuItems from "./components/MenuItems";
import Biryani from "./components/Biryani";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chef from "./components/Chef";
import Login from "./components/Login";
import Head from "./components/Head";
function App() {
  return (
    <div className="App">
      {/* <Additem /> */}{" "}
      <Router>
        {/* <Home /> */}
        <Head />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<Menu />} />
          <Route path="/menu-items" element={<MenuItems />} />
          <Route path="/chef" element={<Chef />} />
        </Routes>
      </Router>
      <Footer />
      {/* <Biryani /> */}
    </div>
  );
}

export default App;
