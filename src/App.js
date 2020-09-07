import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromResponse } from "./spotify";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const tokenString = getTokenFromResponse();
    console.log(token);
    window.location.hash = "";
    const _token = tokenString.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);
  return <div className="app">{token ? <h2>Bazil</h2> : <Login />}</div>;
}

export default App;
