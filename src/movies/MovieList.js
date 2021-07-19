import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Container, Grid} from "@material-ui/core";
import axios from "axios";

const initState = []

const MovieList = () => {

    const [movies, setMovies] = useState(initState)

    useEffect(() => {

        axios.get("/data/movies.json")
            .then(res => {
                setMovies(res.data.Movies.Items)
            })

    },[])

    const list = movies.map(m => <MediaCard key={m.RepresentationMovieCode} movie ={m} ></MediaCard>)

    return (
        <div>
            <Container fixed>
                <Grid container>
                    <Grid item xs={4}>
                        {list}
                    </Grid>
                    <Grid item xs={4}>
                        {list}
                    </Grid>
                    <Grid item xs={4}>
                        {list}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default MovieList;

const MediaCard = ({movie}) => {

    console.log(movie)

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={movie.PosterURL}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}