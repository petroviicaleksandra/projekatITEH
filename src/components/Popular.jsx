import React from "react";
import OnePopular from "./OnePopular";

const Popular = ({ popular }) => {
  return (
    <div className="pop-container">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {popular.map((pop) => (
          <OnePopular key={pop.id} {...pop} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
