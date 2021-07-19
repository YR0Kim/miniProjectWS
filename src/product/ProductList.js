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
<<<<<<< Updated upstream
import TodoRead from "../todo1/TodoRead";
=======
>>>>>>> Stashed changes

const initState = {
    "dtoList": [],
    "listRequestDTO": {},
    "pageMaker": {
        "next": false,
        "page": 1,
        "pageList": [],
        "prev": false,
        "size": 10,
        "totalCount": 0
    },
    "page":1,
    "start":0,
    "end":0
}

const ProductList = () => {

    const [productSearchList,setProductSearchList] = useState(initState)

    const [loading, setLoading] = useState(false)

    const [flag,setFlag] = useState(false)

    const [targetPno,setTargetPno] = useState(null)

    useEffect(() => {
        setLoading(true)
        productService.getSearchProductList(productSearchList.page).then(data => {
            console.log("주입할 데이터",data)
            setProductSearchList(data)
            console.log("주입후 데이터", productSearchList)
            setLoading(false)
        })
    },[flag]);

    const movePage = (num) => {
        console.log("무브페이지 시작")
        console.log("넘넘",num)
        setProductSearchList({...productSearchList, page:num})
        setTargetPno(null)
        console.log("무브페이지 도중 페이지 ",productSearchList.page)
        console.log("무브페이지 끝")
        setFlag(!flag) //같은 페이지 번호를 눌러도 갱신이 되도록!
    }

    const list = productSearchList.dtoList
        .map(p => <MediaCard key={p.productDTO.pno} product={p}></MediaCard> )

    return (
        <div>
            {loading ? <h3>Loading....</h3> :
                <>
                    {list}
                    <div>
                        <PageList productSearchList={productSearchList} movePage ={movePage}></PageList>
                    </div>
                    <div>
                        <hr/>
                        {/*{targetPno && <TodoRead targetPno = {targetPno} movePage ={movePage}></TodoRead> }*/}
                        <hr/>
                    </div>
                </>
            }
        </div>
    );
};



const useStyles = makeStyles({
    root: {
        width: 230,
        margin : 10,
        float : "left",
        overflow : "inherit"
    },
    media: {
        height: 200,
    }

})

const MediaCard = ({product}) => {
    //console.log("카드 데이타", product)
    //console.log("상품번호", product.productDTO.pno);
    const classes = useStyles();

    let imageList = []

    let mainImage = ""
    const link = "C:\\ztemp\\"

    let ia = []
    imageList = product.productDTO.imageList
    imageList.map(image => {
        //console.log(image)
        if(image.main == true){
            mainImage =  link +image.uuid+ "_" + image.fileName
            //console.log("=======================",mainImage)
            /*ia = productService.mainImageDownload(mainImage)*/
            return
        }
    })


//http://www.나의도메인.com/images/MyImg.jpg
    return (
        <Card className={classes.root}>
            <CardActionArea >
                <CardMedia
                    className={classes.media}
                    image= "data:image/jpeg;base64,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"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" align={"left"}>
                        {product.productDTO.username}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2" align={"left"}>
                        {product.productDTO.pname}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" align={"left"}>
                        찜 : {product.favoriteCount} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 구매후기 : {product.reviewCount}
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
};

const PageList = ({productSearchList, movePage}) => {
    console.log("페이지리스트",productSearchList)
    return (
        <>
            {productSearchList.pageMaker.prev && <button onClick={() => movePage(productSearchList.start-1)}>PREV</button>}
            {productSearchList.pageMaker.pageList.map(p => <button  key={p} onClick={() => movePage(p)}>{p}</button>)}
            {productSearchList.pageMaker.next && <button onClick={() => movePage(productSearchList.end+1)}>NEXT</button>}
        </>
    )

};





export default ProductList;