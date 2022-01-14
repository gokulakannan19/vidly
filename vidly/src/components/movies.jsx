import React, { Component } from "react";
import { getMovies } from "../service/fakeMovieService";

export default class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  renderMovies() {
    if (this.state.movies.length === 0)
      return <h2>There are no movies in the database</h2>;

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Number in Stock</th>
            <th scope="col">Daily Rental Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  handleDelete = (movie) => {
    console.log("delete clicked", this);
    // console.log(movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);

    // this.state.movies.pop(movie);
    this.setState({ movies: movies });
  };

  render() {
    return <div>{this.renderMovies()}</div>;
  }
}
