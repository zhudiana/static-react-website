import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodyCollection from "./components/bodySection/BodyCollection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
      <BodyCollection />
    </div>
  );
}

export default App;
