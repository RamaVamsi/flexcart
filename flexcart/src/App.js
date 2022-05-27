import "./App.css";
import HomePage from "../src/Modules/HomePage";
import HomePageCarousel from "../src/Screens/HomePageCarousel";
import Navbar from "../src/Screens/Navbar";
import ProductPage from "../src/Modules/ProductPage";
import SearchInput from "../src/Modules/SearchInput";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
      {/* <HomePageCarousel /> */}
    </div>
  );
}

export default App;
