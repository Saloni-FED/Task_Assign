import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./screens/LandingPage/LandingPage";
import PricingPage from "./screens/PricingPage/PricingPage";
import Footer from "./components/Footer/Footer";
import Login from "./screens/Auth/Login";
import SignUp from "./screens/Auth/SignUp";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
