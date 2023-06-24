import React from "react";

function Home() {
  return (
    <div>
      {/* List of restaurant  */}
      <div className="mt-4 px-5 pt-3">
        <h3>Restaurant Lists</h3>
        <table className="table">
          <thead>
            <th>Name</th>
            <th>Action</th>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
