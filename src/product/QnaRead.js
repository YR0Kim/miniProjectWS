import React, {useEffect, useState} from 'react';
import productService from "./productService";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const initState = {}

const QnaRead = () => {

    const [data,setData] = useState(initState)

    useEffect(() => {
        productService.getQnaRead().then(read => {
            console.log("주입할 데이터",read)
            setData(read)
        })
    },[]);

    const read = <MediaCard data ={data} ></MediaCard>



    return (
        <div>
            <h1>QnaRead</h1>
            {read}
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

const MediaCard = ({data}) => {
    console.log("데이타", data)

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.username}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.qnacontent}
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

export default QnaRead;