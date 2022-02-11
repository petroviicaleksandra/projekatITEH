import OneMovie from "./OneMovie";

import GenreChart from "./GenreChart";
import { Container } from "react-bootstrap";
import useGoogleCharts from "./useGoogleCharts";

const Cart = ({ movies }) => {
  const google = useGoogleCharts();
  return (
    <div className="cart-container">
      <h3>Kupljene su karte za filmove:</h3>
      {movies.map((mov) => (
        <OneMovie movie={mov} image={mov.imageLink} key={mov.id} inCart={0} />
      ))}
      <Container className="mt-3">
        <h5>Zanrovi</h5>
        <GenreChart google={google} />
      </Container>
    </div>
  );
};

export default Cart;
