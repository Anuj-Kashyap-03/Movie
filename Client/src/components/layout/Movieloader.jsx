import React from 'react'

// MUI Imports
import CircularProgress from "@mui/material/CircularProgress";

// My Imports 
import "./Movieloader.css"

function Movieloader({class_name}) {
  return (
    <div  className={class_name}>
      <div>
        <CircularProgress size={50} color="secondary" thickness={2} />
      </div>
    </div>
  )
}

export default Movieloader
