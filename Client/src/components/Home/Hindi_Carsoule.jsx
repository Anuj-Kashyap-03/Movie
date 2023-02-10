import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import MovieCarousel from "./Movies_carousel";
import styled from "styled-components";
import { Button } from "@mui/material";

const HindiCarouselDiv = styled.div`
  display: flex;
  margin-bottom: 0% 1px !important;
  justify-content: space-between;
  padding: 0 1%;
`;

const HindiCarsoulediv = styled.div`
  margin-bottom: 0% !important;
  margin: 0;
`;

const ViawAllButton = styled(Button)`
  background-color: white !important;
`;
const H2 = styled.h2`
  color: #e8e5e5;
`;

export default function HindiCarsoule() {
  const data = useSelector((state) => state.Hindi.movies);
  const loading = useSelector((state) => state.Hindi.loading);

  return (
    <HindiCarsoulediv>
      <HindiCarouselDiv>
        <H2>Hindi Movies</H2>
        <Link to="/hindi">
          <ViawAllButton>View all</ViawAllButton>
        </Link>
      </HindiCarouselDiv>
      {data ? <MovieCarousel List={data} loading={loading} /> : null}
    </HindiCarsoulediv>
  );
}
