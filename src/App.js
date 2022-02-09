import "./App.css";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Popular from "./components/Popular";
import Tabela from "./components/Tabela";
import Tickets from "./components/Tickets";

function App() {
  const [token, setToken] = useState();
  function addToken(auth_token) {
    setToken(auth_token);
  }

  const [cartNum, setCartNum] = useState(0);
  const [cartMovies, setCartMovies] = useState([]);
  const [movies] = useState([
    {
      imageLink:
        "https://heroichollywood.com/wp-content/uploads/2022/01/Spider-Man-No-Way-Home-Tom-Holland-Poster-691x1024.jpeg",
      id: 1,
      title: "Spider-Man: No Way Home",
      description:
        "Wanting to make his identity a secret, Peter turns to Doctor Strange for help. But when Strange's spell goes haywire, Peter must go up against five deadly new enemies--the Green Goblin, Dr. Octopus, Electro, the Lizard and Sandman--all while discovering what it truly means to be Spider-Man.",
      amount: 0,
    },
    {
      imageLink:
        "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      id: 2,
      title: "Good Will Hunting",
      description:
        "A touching tale of a wayward young man who struggles to find his identity, living in a world where he can solve any problem, except the one brewing deep within himself, until one day he meets his soul mate who opens his mind and his heart.",
      amount: 0,
    },
    {
      imageLink:
        "https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      id: 3,
      title: "Dead Poets Society",
      description:
        "Set at the conservative and aristocratic Welton Academy in Vermont in 1959, it tells the story of an English teacher who inspires his students through his teaching of poetry.",
      amount: 0,
    },
    {
      imageLink:
        "https://m.media-amazon.com/images/M/MV5BMGRiYjE0YzItMzk3Zi00ZmYwLWJjNDktYTAwYjIwMjIxYzM3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      id: 4,
      title: "Atonement",
      description:
        "Thirteen-year-old fledgling writer Briony Tallis irrevocably changes the course of several lives when she accuses her older sister's lover of a crime he did not commit.",
      amount: 0,
    },
    {
      imageLink:
        "https://m.media-amazon.com/images/I/91MCxPWGWqL._AC_SY679_.jpg",
      id: 5,
      title: "Little Women",
      description:
        "Little Women is a story that revolves around the lives of four sisters growing up during and after the Civil War. With their father off fighting the war, the girls create their own theatre company as they write and perform skits for each other. Follow the heartaches and laughs as each daughter overcomes her flaws.",
      amount: 0,
    },
    {
      imageLink:
        "https://cdn.shopify.com/s/files/1/0482/3452/8936/products/Inglourious-Basterds-Poster-Films-Vibez-1619635732.jpg?v=1619635733",
      id: 6,
      title: "Inglorious Basterds",
      description:
        "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same. In German-occupied France, young Jewish refugee Shosanna Dreyfus witnesses the slaughter of her family by Colonel Hans Landa.",
      amount: 0,
    },
  ]);
  function refreshCart() {
    let newMovies = movies.filter((mov) => mov.amount > 0);
    setCartMovies(newMovies);
  }
  function addMovie(title, id) {
    console.log("Dodat je film: " + title);
    setCartNum(cartNum + 1);
    movies.forEach((mov) => {
      if (mov.id === id) {
        mov.amount++;
      }
      console.log(mov.amount);
    });
    refreshCart();
  }
  function remove(title, id) {
    movies.forEach((mov) => {
      if (mov.id === id) {
        if (mov.amount > 0) {
          setCartNum(cartNum - 1);
          mov.amount = mov.amount - 1;
          console.log("Film " + title + " je izbrisan iz korpe.");
        } else {
          alert("Film " + title + " nema nijednu kartu!");
        }
      }
    });
    refreshCart();
  }
  let labs = "Uloguj se";
  //popularno
  const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopular(data.results);
      });
  }, []);

  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum} token={token}></NavBar>
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              movies={movies}
              onAdd={addMovie}
              onRemove={remove}
              labs={labs}
            />
          }
        />
        <Route path="/cart" element={<Cart movies={cartMovies} />} />
        <Route path="/signup" element={<Login addToken={addToken} />} />
        <Route path="/popular" element={<Popular popular={popular} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tabela" element={<Tabela />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
