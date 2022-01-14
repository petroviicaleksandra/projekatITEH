import React from "react";
import Button from "./Button";
import Header from "./Header";

const Korpa = ({ korpa, dodajProizvod, obrisiProizvod }) => {
  const ukupnaCena = korpa.reduce(
    (cena, pr) => cena + pr.kolicina * pr.cena,
    0
  );
  const imeKlase = "cart-items-add";
  const imeKlase2 = "cart-items-remove";
  return (
    <>
      <Header labs="Izloguj se" />
      <div className="cart-items">
        <div className="cart-items-header">
          <h3>Korpa</h3>
        </div>
        {korpa.length === 0 && (
          <div className="cart-items-empty">Nema proizvoda u korpi.</div>
        )}

        <div>
          {korpa.map((proizvod) => (
            <div className="cart-items-list" key={proizvod.id}>
              <img
                className="cart-items-image"
                src={proizvod.slika}
                alt={proizvod.naziv}
              />
              <div className="cart-items-name">{proizvod.naziv}</div>
              <div className="cart-items-price">
                {proizvod.kolicina} * {proizvod.cena} RSD
              </div>
              <div className="cart-items-function">
                <Button
                  label="+"
                  imek={imeKlase}
                  handleClick={dodajProizvod}
                  pr={proizvod}
                />

                <Button
                  label="-"
                  imek={imeKlase2}
                  handleClick={obrisiProizvod}
                  pr={proizvod}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="cart-items-total-price-name">
          Ukupno:
          <div className="cart-items-total-price">{ukupnaCena} RSD</div>
        </div>
      </div>
    </>
  );
};

export default Korpa;
