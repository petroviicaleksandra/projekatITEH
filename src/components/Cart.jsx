import OneMovie from "./OneMovie";

const Cart = ({ movies }) => {
  return (
    <div className="cart-container">
      <h3>Kupljene su karte za filmove:</h3>
      {movies.map((mov) => (
        <OneMovie movie={mov} image={mov.imageLink} key={mov.id} inCart={0} />
      ))}
    </div>
  );
};

export default Cart;