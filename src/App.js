import logo from "./logo.svg";
import "./App.css";
import data from "./components/back/Data/Data";
import Header from "./components/front/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Proizvodi from "./components/front/Proizvodi";
import Korpa from "./components/front/Korpa";

function App() {
  const { proizvodi } = data;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Proizvodi pr={proizvodi} />} />
        <Route path="/cart" element={<Korpa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
