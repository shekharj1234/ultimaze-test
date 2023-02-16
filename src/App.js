// import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://lobster-app-ddwng.ondigitalocean.app/product/list",
      headers: {
        api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
      },
    }).then((response) => setData(response.data.message));
  });
  // console.log("data", data);
  return (
    <div className="App">
      <h2>Create New Product</h2>
      <div className="from-wrapper">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Product Name"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Original Price"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Sales Price"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Product Type"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              rows="4"
            />
          </div>
          <div className="form-group btn">
            <input
              type="button"
              //  className="btn"
              placeholder="Description"
              value="Create"
            />
          </div>
        </form>
      </div>
      <div className="list-wrap">
        <table>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Original Price</th>
            <th>Sales Price</th>
            <th>Product Type</th>
            <th>Description</th>
          </tr>

          <tbody>
            {data?.map((list) => {
              return (
                <tr key={list._id}>
                  <td>{list._id}</td>
                  <td>{list.product_name}</td>
                  <td>{list.original_price}</td>
                  <td>{list.sale_price}</td>
                  <td>{list.product_type}</td>
                  <td>{list.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
