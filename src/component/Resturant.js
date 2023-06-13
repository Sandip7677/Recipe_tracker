import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Menucard from "./Menucard";

const Resturant = () => {
  const [recipi, setRecipi] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const getdata = async () => {
    const recipe = await axios.get(
      "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=9223cf9b&app_key=8daf0aae98ec03149759b6398bbf3413"
    );
    setRecipi(recipe.data.hits);
    console.log(recipe.data.hits);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <Menucard recipi={recipi} />
    </>
  );
};

export default Resturant;
