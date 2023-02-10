import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// My Imports
import TopCarousel from "./TopCarousel";
import { getLatestMovies } from "../../Redux/actions/HomeAction";
import { getHindiMovies } from "../../Redux/actions/hindiaction";
import { getEnglishMovies } from "../../Redux/actions/englishAction";
import "./home.css";
import HindiCarsoule from "./Hindi_Carsoule";
import EnglishCarsoule from "./EnglishCarsoule";
import { set_title } from "../Title/title";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestMovies());
    dispatch(getHindiMovies());
    dispatch(getEnglishMovies());
    set_title('Hotstar')
  }, [dispatch]);
  return (
    <div className="home">
      <TopCarousel />
      <HindiCarsoule />
      <EnglishCarsoule />

    </div>
  );
}

export default Home;
