import React from "react";
import Login from "./Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Restaurant from "./Restaurant.jsx";
import Profile from "./Profile.jsx";
import Home from "./Home.jsx";
import AddRestaurant from "./AddRestaurant.jsx";
import RestaurantEdit from "./EditRestaurant.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/restaurant" element={<Restaurant />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/create" element={<AddRestaurant />}></Route>
          <Route
            path="/restaurantEdit/:id"
            element={<RestaurantEdit />}
          ></Route>{" "}
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
