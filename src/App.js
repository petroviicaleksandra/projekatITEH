import logo from "./logo.svg";
import "./App.css";
import data from "./components/back/Data/Data";
import Header from "./components/front/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Proizvodi from "./components/front/Proizvodi";
import Korpa from "./components/front/Korpa";
import { useState } from "react";
import Login from "./components/front/Login";

function App() {
  const { proizvodi } = data;
  const [korpa, setKorpa] = useState([]);

  const dodajProizvod = (proizvod) => {
    const Postoji = korpa.find((pr) => pr.id === proizvod.id);

    if (Postoji) {
      setKorpa(
        korpa.map((pr) =>
          pr.id === proizvod.id
            ? {
                ...Postoji,
                kolicina: Postoji.kolicina + 1,
              }
            : pr
        )
      );
    } else {
      setKorpa([...korpa, { ...proizvod, kolicina: 1 }]);
    }
  };
  const obrisiProizvod = (proizvod) => {
    const Postoji = korpa.find((pr) => pr.id === proizvod.id);
    if (Postoji.kolicina === 1) {
      setKorpa(korpa.filter((pr) => pr.id !== proizvod.id));
    } else {
      setKorpa(
        korpa.map((pr) =>
          pr.id === proizvod.id
            ? { ...Postoji, kolicina: Postoji.kolicina - 1 }
            : pr
        )
      );
    }
  };
  const imek = "";
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Proizvodi pr={proizvodi} dodajProizvod={dodajProizvod} />}
        />
        <Route
          path="/cart"
          element={
            <Korpa
              korpa={korpa}
              dodajProizvod={dodajProizvod}
              obrisiProizvod={obrisiProizvod}
            />
          }
        />
        <Route path="/signup" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
