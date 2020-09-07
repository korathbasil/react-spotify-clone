import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateContext } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useStateContext();
  useEffect(() => {
    const tokenString = getTokenFromResponse();
    console.log(token);
    window.location.hash = "";
    const _token = tokenString.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
    }
  }, []);
  console.log(user);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
