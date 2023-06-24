import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/getRestaurant")
      .then((res) => setRestaurants(res.data.Result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <Link to="/create" className="btn btn-primary mt-3">
        Add Restaurant
      </Link>
      <div className="mt-3">
        <h3>Restaurant List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant, index) => (
              <tr key={index}>
                <td>{restaurant.name}</td>
                <td>{restaurant.email}</td>
                <td>{restaurant.location}</td>
                <td>{restaurant.phone}</td>
                <td>
                  <Link
                    to={`/EditRestaurant/${restaurant.id}`}
                    className="btn btn-primary mx-2"
                  >
                    Edit
                  </Link>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Restaurant;
