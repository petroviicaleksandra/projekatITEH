import React from "react";

const Korpa = ({ korpa, dodajProizvod, obrisiProizvod }) => {
  const ukupnaCena = korpa.reduce(
    (cena, pr) => cena + pr.kolicina * pr.cena,
    0
  );
  return (
    <div className="cart-items">
      <div className="cart-items-header">Korpa</div>
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
              <button
                className="cart-items-add"
                onClick={() => dodajProizvod(proizvod)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => obrisiProizvod(proizvod)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total-price-name">
        Ukupno:
        <div className="cart-items-total-price">{ukupnaCena} RSD</div>
      </div>
    </div>
  );
};

export default Korpa;
