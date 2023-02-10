import React from "react";
import { Link } from "react-router-dom";

// material UI Importing
import "./MovieCard.css";

function MovieCard({ itemData }) {
  return (
    <div className="Movie_box" >
      {itemData.map((item) => (
        <div
          key={item.Id}
          className="movie_card"
        >
          <Link to={"/movie/"+item.Id} >
            <div className="movie_card_child" >
                <img src={`${item.image}`} alt={item.name} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
