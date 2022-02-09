import React, { Component } from "react";
import axios from "axios";

class DatabaseMovies extends Component {
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
        <h4> Filmovi u bazi</h4>
        <table className="table table-striped table-sm table-bordered">
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
