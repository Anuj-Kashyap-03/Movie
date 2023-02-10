import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_movie_details_by_id } from "../../Redux/actions/MoviedetailsAction";
import { set_title } from "../Title/title";
import Movieloader from "../layout/Movieloader";

import "./Moviedeatails.css";

export default function Moviedeatails() {
  const dispatch = useDispatch();

  let { id } = useParams();

  const modal = useSelector((state) => state.Model_Movie.data);
  const success = useSelector((state) => state.Model_Movie.success);
  const loading = useSelector((state) => state.Model_Movie.loading);


  useEffect(() => {
    dispatch(GET_movie_details_by_id(id));
  }, [id, dispatch]);

  useEffect(()=>{
    // console.log(success && !loading)
    if(success && !loading){
      // console.log('running')
      set_title(modal.name)
    }
  },[modal,success,loading])
  return (
    <>
      {success && !loading && (
        <div className="moviedetails">
          <div className="left">
            <div className="modal_img">
              <img
                src={modal.image}
                className="img-fluid rounded-start"
                alt={modal.name}
              />
            </div>
          </div>
          <div className="right">
            <div className="card-body">
              <h3 className="card-title">{modal.name}</h3>
              <h5 className="subtitle">{modal.Sub_title}</h5>
              <p className="card-text">{modal.description}</p>
              <p className="card-text">
                <small style={{ color: "white" }} className="ext-muted">
                  {modal.time}
                </small>
              </p>

              <div className="card_action">
                <a href={modal.link} target="_blan">
                  <button type="button" className="btn btn-primary">
                    Watch Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {!success && loading && (
        <div className="moviedetails_movieloader">
          <Movieloader />
        </div>
      )}
    </>
  );
}
