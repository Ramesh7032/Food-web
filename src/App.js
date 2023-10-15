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
function App() {
  return (
    <div className="App">
      {/* <Additem /> */}/{" "}
      <Router>
        <Home />
        <About />
        <Menu />
        <Chef />
        <Footer />
        <Routes>
          <Route path="/" element={<MenuItems />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      {/* <Biryani /> */}
      <Login />
    </div>
  );
}

export default App;
