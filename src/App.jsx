import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./screens/LandingPage/LandingPage";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
