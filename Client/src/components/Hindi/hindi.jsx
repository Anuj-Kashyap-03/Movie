import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// MUI Imports
import Button from "@mui/material/Button";

// My components Importing
import MovieCard from "../layout/MovieCard";
import { getHindiMovies } from "../../Redux/actions/hindiaction";
import { set_title } from "../Title/title";
import Movieloader from "../layout/Movieloader";
import "./hindi.css";

function Hindi() {
  const dispatch = useDispatch();

  const [page, setpage] = useState(1);

  const data = useSelector((state) => state.Hindi.movies);
  const loading = useSelector((state) => state.Hindi.loading);
  let success = useSelector((state) => state.Hindi.sucess);

  const load_more = async () => {
    // dispatch(getHindiMovies(page+1));
    document.getElementById("loading").style.display = "flex";
    dispatch(getHindiMovies(page + 1));

    await setpage(page + 1);
    // console.log(success2);
    window.scrollTo(0, document.body.offsetHeight);
  };

  useEffect(() => {
    set_title('Hindi Movies')
    dispatch(getHindiMovies(1));
  }, [dispatch]);

  return (
    <>
      {loading && page === 1 ? (
        <Movieloader class_name="loader"></Movieloader>
      ) : (
        data && <MovieCard itemData={data} />
      )}
      {success ? (
        <div className="load_more_container">
          {success && !loading && (
            <Button
              onClick={load_more}
              variant="contained"
              className="load_more_button"
            >
              Load more
            </Button>
          )}
        </div>
      ) : null}

      <div id="loading" style={{ display: "none" }}>
        <Movieloader class_name="loader load_more" />
      </div>
    </>
  );
}

export default Hindi;
