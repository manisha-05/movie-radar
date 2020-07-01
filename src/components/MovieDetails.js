import React from 'react'
import color1 from '../images/color1.jpg'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// core components
import Card from "./Card/Card.js";
import CardBody from "./Card/CardBody.js";
import CardHeader from "./Card/CardHeader.js";
import CardFooter from "./Card/CardFooter.js";
import Button from "./CustomButtons/Button.js";

import { cardTitle } from "../styles/jss/material-kit-pro-react";

const style = {
    cardTitle,
    textCenter: {
      textAlign: "center",
      zindex: "100",
    position: "absolute !important",
    bottom: "180px",
    background:"rgba(0,0,0,0.8)",
    color:"white",
    width:"50rem",
    height:"30rem"
    
    },
    textMuted: {
      color: "#6c757d"
    }
  };

  const useStyles = makeStyles(style);


function MovieDetails() {
    const classes = useStyles();

    return (
        <div className="moveDetailContainer">
            <img className="backgroundimg" src={color1} alt=""/>
            <Card  className={classes.textCenter}  >
      <CardHeader color="info">Featured</CardHeader>
      <CardBody >
        <h4>Special title treatment</h4>
        <p>
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Button color="info" ><PlayArrowIcon/>Play Trailer</Button>
      </CardBody>

    </Card>
        </div>
    )
}

export default MovieDetails


/**
 * import React from "react";




const useStyles = makeStyles(style);

export default function CardExampleFeatured() {
  const classes = useStyles();
  return (
    <Card className={classes.textCenter}>
      <CardHeader color="danger">Featured</CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Special title treatment</h4>
        <p>
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Button color="primary">Do something</Button>
      </CardBody>
      <CardFooter className={classes.textMuted}>2 days ago</CardFooter>
    </Card>
  );
}
 */