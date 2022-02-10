import React, { Component } from "react";
import axios from "axios";
import { useState } from "react";

class DatabaseMovies extends Component {
  handleClick() {
    var tabela, redovi, switching, i, x, y, zaZamenu;
    tabela = document.getElementById("myTable");
    switching = true;

    while (switching) {
      switching = false;
      redovi = tabela.rows;
      for (i = 1; i < redovi.length - 1; i++) {
        zaZamenu = false;
        x = redovi[i].getElementsByTagName("TD")[3];
        y = redovi[i + 1].getElementsByTagName("TD")[3];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          zaZamenu = true;
          break;
        }
      }
      if (zaZamenu) {
        redovi[i].parentNode.insertBefore(redovi[i + 1], redovi[i]);
        switching = true;
      }
    }
  }
  handleClick2() {
    var tabela, redovi, switching, i, x, y, zaZamenu;
    tabela = document.getElementById("myTable");
    switching = true;

    while (switching) {
      switching = false;
      redovi = tabela.rows;
      for (i = 1; i < redovi.length - 1; i++) {
        zaZamenu = false;
        x = redovi[i].getElementsByTagName("TD")[0];
        y = redovi[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          zaZamenu = true;
          break;
        }
      }
      if (zaZamenu) {
        redovi[i].parentNode.insertBefore(redovi[i + 1], redovi[i]);
        switching = true;
      }
    }
  }
  handleClick3() {
    var input, filter, tabela, tr, polje, i, vrednost;
    input = document.getElementById("pretraga");
    filter = input.value.toUpperCase();
    tabela = document.getElementById("myTable");
    tr = tabela.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      polje = tr[i].getElementsByTagName("td")[1];
      if (polje) {
        vrednost = polje.textContent || polje.innerText;
        if (vrednost.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  state = {
    movies: [],
    loading: true,
  };
  async componentDidMount() {
    const res = await axios.get("http://127.0.0.1:8000/api/movies");
    console.log(res);
    if (res.data.status === 200) {
      this.setState({
        movies: res.data.movies,
        loading: false,
      });
    }
  }
  render() {
    var movie_HTML_TABLE = "";
    if (this.state.loading) {
      movie_HTML_TABLE = (
        <table>
          <tr>
            <td colSpan="4">
              <h2>Loading..</h2>
            </td>
          </tr>
        </table>
      );
    } else {
      movie_HTML_TABLE = this.state.movies.map((item) => {
        return (
          //   <table className="table table-striped table-sm table-bordered">
          //   <tbody>
          <tr key={item.id} className=" text-center ">
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.duration} minuta</td>
            <td>{item.genre_id}</td>
          </tr>
          //   </tbody>
          //   </table>
        );
      });
    }
    return (
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-12">
      //         <div className="card">
      //           <div className="card-header">

      //   </div>
      //   <div className="card-body">
      <>
        <input id="pretraga" type="text" placeholder="Pretrazi.." />
        <button
          id="btn-sortiraj"
          class="btn btn-normal"
          onClick={() => this.handleClick3()}
        >
          Pretrazi po nazivu
        </button>
        <h4> Filmovi u bazi</h4>
        <table
          id="myTable"
          className="table table-striped table-sm table-bordered"
        >
          <thead>
            <tr className="text-center text-secondary">
              <th>ID</th>
              <th>Naziv</th>
              <th>Trajanje</th>
              <th>Zanr ID</th>
            </tr>
          </thead>
          <tbody>{movie_HTML_TABLE}</tbody>
        </table>
        <button
          id="btn-sortiraj"
          class="btn btn-normal"
          onClick={() => this.handleClick()}
        >
          Sortiraj po zanru
        </button>
        <button
          id="btn-sortiraj"
          class="btn btn-normal"
          onClick={() => this.handleClick2()}
        >
          Sortiraj po id
        </button>
      </>
      //   </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
    );
  }
}

export default DatabaseMovies;
