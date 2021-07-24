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
import ProductRead from "./ProductRead";
import queryString from "query-string";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {FormHelperText} from "@material-ui/core";
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import {ThemeProvider} from "styled-components";
const theme = unstable_createMuiStrictModeTheme();


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
    "end":0,
    "type":""

}

// {location} 은 url에서 ? 이후의 요소를 전부 끌고온다
const ProductList = ({location}) => {

    const [productSearchList,setProductSearchList] = useState(initState)

    const [loading, setLoading] = useState(false)

    const [flag,setFlag] = useState(false)

    const [targetPno,setTargetPno] = useState(null)

    // {location}을 이용해 쿼리 받아오기
    const query = queryString.parse(location.search)


    useEffect(() => {
        setLoading(true)
        productService.getSearchProductList(productSearchList.page,query.cname).then(data => {
            console.log("카테고리",query.cname)
            /*console.log("주입할 데이터",data)*/
            setProductSearchList(data)
            /*console.log("주입후 데이터", productSearchList)*/
            setLoading(false)
        })
    },[flag,query.cname]);

    const movePage = (num) => {
        /*console.log("무브페이지 시작")
        console.log("넘넘",num)*/
        setProductSearchList({...productSearchList, page:num})
        setTargetPno(null)
       /* console.log("무브페이지 도중 페이지 ",productSearchList.page)
        console.log("무브페이지 끝")*/
        setFlag(!flag) //같은 페이지 번호를 눌러도 갱신이 되도록!
    }

    const readProduct = (pno) => {
        setTargetPno(pno)
        setFlag(!flag)
       /* console.log("setTargetPno",targetPno)*/
    }


    const list = productSearchList.dtoList
        .map(p => <span key={p.productDTO.pno} onClick={async ()=>{ setLoading(!loading);
            await readProduct(p.productDTO.pno); setLoading(!loading)}}><MediaCard key={p.productDTO.read} product={p} readProduct = {readProduct} ></MediaCard></span> )

    const productListStyle = {
        width: 1270,
        height: 700,
    }

    const pageListStyle = {
        width: 1000,
        height: 200,
        display : "inline-block"
    }

    return (
        <>
            <div>
                {loading ? <h3>Loading....</h3> :
                    <>
                        <div style={productListStyle}>
                            {list}
                        </div>
                        <div style={pageListStyle}>
                            <PageList productSearchList={productSearchList} movePage ={movePage}></PageList>
                        </div>
                        <div>
                            <hr/>
                            {targetPno && <ProductRead targetPno = {targetPno} movePage ={movePage}></ProductRead>}
                            <hr/>
                        </div>
                    </>
                }
            </div>
        </>
    );
}




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
    imageList = product.productDTO.imageList
    imageList.map(image => {
        //console.log(image)
        if(image.main == true){
            mainImage =  "http://localhost:8080/down/"+image.uuid+ "_" + image.fileName
            /*console.log("=======================",mainImage)*/
            return
        }
    })

    if(mainImage==""){
        console.log('이미지 없음')
        mainImage="http://www.hanawaterjet.com/app/dubu_board/docs/imgs/n/lg_n15287811543531_%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC%EC%A4%80%EB%B9%84%EC%A4%91%EC%9E%85%EB%8B%88%EB%8B%A4.jpg"
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="상품 이미지"
                    className={classes.media}
                    title="상품 이미지"
                    image={mainImage}

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
    /*console.log("페이지리스트",productSearchList)*/
    return (
        <>
            {productSearchList.pageMaker.prev && <button onClick={() => movePage(productSearchList.start-1)}>PREV</button>}
            {productSearchList.pageMaker.pageList.map(p => <button  key={p} onClick={() => movePage(p)}>{p}</button>)}
            {productSearchList.pageMaker.next && <button onClick={() => movePage(productSearchList.end+1)}>NEXT</button>}
        </>
    )

};







export default ProductList;
