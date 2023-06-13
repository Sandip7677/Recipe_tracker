import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Menucard from "./Menucard";

const Resturant = () => {
  const [recipi, setRecipi] = useState([]);
  const [searchdata, setSearchdata] = useState("chicken");

  const getdata = async () => {
    const recipe = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchdata}&app_id=9223cf9b&app_key=${process.env.REACT_APP_KEY}`
    );
    setRecipi(recipe.data.hits);
    console.log(recipe.data.hits);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <h1>Find Your Desired Recipe</h1>
      <div className="nav">
        <input
          type="text"
          placeholder="search.."
          className="search"
          value={searchdata}
          onChange={(e) => {
            setSearchdata(e.target.value);
          }}
        />
        <button className="button" onClick={getdata}>
          search
        </button>
      </div>
      <Menucard recipi={recipi} />
    </>
  );
};

export default Resturant;
