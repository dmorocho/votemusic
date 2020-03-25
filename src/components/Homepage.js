import React, { useState } from "react";
import token from "../secrets";
import axios from "axios";

const HomePage = () => {
  const [Playlist, usePlaylist] = useState();

  const fetchPlaylist = async () => {
    try {
    } catch (error) {
      console.log(error);
      let res = await axios.get();
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    return console.log("hi");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Start by typing in your Playlist code</p>
        <input type="text" placeholder="playlist code" />
        <input type="submit" />
      </form>
    </div>
  );
};
export default HomePage;
