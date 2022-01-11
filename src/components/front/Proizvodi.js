import React from "react";

const Proizvodi = ({ pr }) => {
  return (
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
            <button className="product-add-button">Kupi</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Proizvodi;
