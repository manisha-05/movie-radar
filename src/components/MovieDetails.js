import React, {useContext, useEffect}from 'react'
import color1 from '../images/color1.jpg'
import axios from 'axios'
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
import {MyContext} from "./MovieCards"

import { cardTitle } from "../styles/jss/material-kit-pro-react";
import {context} from '../api/Context'
import MovieSlide from './MovieSlide';

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
    height:"30rem",
    left:"2rem",
    
    
    },
    textMuted: {
      color: "#6c757d"
    }
  };

  const useStyles = makeStyles(style);


function MovieDetails(props) {
    const classes = useStyles();

    const URL="https://image.tmdb.org/t/p/original/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg"

    const data= useContext(context);
    const [movie,setMovie] = React.useState([])

    useEffect(() =>{
      axios.get(API)
      .then(res =>{
          setMovie(res.data)
       
      })
  },[])
  const API=`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=69da287f8d942bd5ac2693404c94e0da&language=en-US"`


      console.log(movie)

    return (
    
        <div className="moveDetailContainer">
            <img className="backgroundimg" src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}  alt=""/>
            <Card  className={classes.textCenter}  >
      <CardHeader color="info" className="movieCardHeader">{movie.original_title}</CardHeader>
      <CardBody  className="movieDetailsBody">
        <h4>Release Date:{movie.release_date}</h4>
        <p>
         {movie.overview}
        </p>
        <Button color="info" ><PlayArrowIcon/>Play Trailer</Button>
      </CardBody>
    
      <CardFooter>
     
      </CardFooter>
   
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