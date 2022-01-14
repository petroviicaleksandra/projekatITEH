import React from "react";
import Button from "./Button";
import Header from "./Header";
const Proizvodi = ({ pr, dodajProizvod }) => {
  return (
    <>
      <Header labs="Uloguj se" />
      <div className="products">
        {pr.map((proizvod) => (
          <div className="card">
            <div>
              <img
                className="product-image"
                src={proizvod.slika}
                alt={proizvod.naziv}
              />
            </div>
            <div className="product-name">
              <h3>{proizvod.naziv}</h3>
            </div>
            <div className="product-price">{proizvod.cena} RSD</div>
            <div>
              <Button
                imek="product-add-button"
                handleClick={dodajProizvod}
                pr={proizvod}
                label="Kupi"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Proizvodi;
