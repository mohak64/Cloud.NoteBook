import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="container">
          <Routes>
            <Route exact path="/home" element={<Home/>}/>
              
            <Route exact path="/about" element={<About/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
