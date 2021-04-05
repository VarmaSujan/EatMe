import { useState, useEffect, React } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components/Page Imports

import Search from "../pages/Search.jsx";

export default function HomePage() {
  // Constants
  const [status, setStatus] = useState(0);
  const [orders, setOrders] = useState([]);
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Methods
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      // .then((json) => {
      //   setOrders(json);
      //   setStatus(1);
      // });
      .then((json) => onFetchSuccess(json))
      .catch((error) => onFetechFail(error));
  }, [setOrders, setStatus]);
  console.log(orders);

  function onFetchSuccess(json) {
    setOrders(json);
    setStatus(1);
  }

  function onFetechFail(error) {
    console.log("Error loading data", error);
    setStatus(2);
  }

  return (
    <div className="App">
      <h1>Homepage </h1>
      <div className="Fetching">
        {status === 0 && <p>🤞 Loading...</p>}
        {/* {status === 1 && <p>data loaded</p>} */}
        {status === 1 && <Search orders={orders} />}
        {status === 2 && (
          <p>
            👎 Error loading data, please check your connention, loading from
            backup data!
          </p>
        )}
      </div>
    </div>
  );
}
