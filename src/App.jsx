import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./screens/LandingPage/LandingPage";
import PricingPage from "./screens/PricingPage/PricingPage";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/pricing" element={<PricingPage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
