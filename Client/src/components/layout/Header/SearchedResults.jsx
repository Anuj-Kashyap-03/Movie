import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import Movieloader from "../Movieloader";

const Movieloaderdiv = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0px auto",
  "& p": {
    color: "white",
  },
}));

const Results = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.light,
  top: "80px",
  flexWrap: "wrap",
  height: "fit-content",
  overflow: "auto",
  transition: theme.transitions.easing,
}));

const Mydiv = styled("div")(({ theme }) => ({
  zIndex: 5,
}));

export default function SearchedResults({handle_close}) {
  const data = useSelector((state) => state.Search.movies);
  const Loading = useSelector((state) => state.Search.loading);
  const success = useSelector((state) => state.Search.success);
  const search_for = useSelector((state) => state.Search.for);
  const resultfor = useSelector((state) => state.Search.resultfor);

  return (
    <Mydiv
      style={{
        height: "100%",
        display: "flex",
      }}
    >
      {search_for === "" ? (
        <Movieloaderdiv>
          <p>Enter keywords for searching...</p>
        </Movieloaderdiv>
      ) : (
        <Results>
          {data && (resultfor===search_for) &&
            success &&
            !Loading &&
            data.map((item) => (
              <div
                key={item.Id}
                className="movie_card"
                style={{ width: "33.3%" }}
              >
                <Link to={"/movie/"+item.Id}>
                  <div className="movie_card_child">
                    <img 
                    src={`${item.image}`}
                     alt={item.name} 
                     onClick={()=>handle_close()}/>
                  </div>
                </Link>
              </div>
            ))}
        </Results>
      )}
      {Loading && (
        <Movieloaderdiv>
          <Movieloader />
        </Movieloaderdiv>
      )}
      {data && !(search_for==='') && !Loading && success && data.length === 0 && (
        <Movieloaderdiv>
          <p>No Result found for {search_for}</p>
        </Movieloaderdiv>
      )}
    </Mydiv>
  );
}

// SearchedResults