import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Tickets extends Component {
  state = {
    tickets: [],
    loading: true,
  };
  async componentDidMount() {
    const res = await axios.get("http://127.0.0.1:8000/api/tickets");
    console.log(res);
    if (res.data.status === 200) {
      this.setState({
        tickets: res.data.tickets,
        loading: false,
      });
    }
  }
  render() {
    var ticket_HTML_TABLE = "";
    if (this.state.loading) {
      ticket_HTML_TABLE = (
        <tr>
          <td colSpan="4">
            <h2>Loading..</h2>
          </td>
        </tr>
      );
    } else {
      ticket_HTML_TABLE = this.state.tickets.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.movie_id}</td>
            <td>{item.user_id}</td>
            <td>
              <Link
                to={"izmeniKartu/${item.id}"}
                className="btn btn-success btn-sm"
              >
                Izmeni
              </Link>
            </td>
          </tr>
        );
      });
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4> Karte u bazi</h4>
              </div>
              <div className="card-body">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Movie ID</th>
                      <th>User ID</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>{ticket_HTML_TABLE}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tickets;
