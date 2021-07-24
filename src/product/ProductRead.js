import React, {useEffect, useState} from "react";
import productService from "./productService";
import reviewService from "./reviewService";
import ProductOneReviewList from "./ProductOneReviewList";
import ProductOneQnaList from "./ProductOneQnaList";
import Slider from './Slider.js'
import ProductQnaRegister from "./ProductQnaRegister";
import {Grid} from "@material-ui/core";



const initState = {
    pno: 0,
    price: 0,
    cno: null,
    del: false,
    imageList: [],
    modDate: "",
    pcontent: "",
    pcount: 0,
    pname: "",
    regDate: "",
    username: ""
}


const ProductRead = ({targetPno,movePage}) => {

    const [product,setProduct] = useState(initState)
    const [mainImage,setMainImage] = useState("")

    const [targetReviewAndQnaPno,setTargetReviewAndQnaPno] = useState(0)
    const [flag,setFlag] = useState(false)

    const [images,setImages] = useState([])

    useEffect(()=>{
        productService.readProductOne(targetPno).then(one => {
            /*console.log("프로덕트리드 이거 넣음one",one)*/
            setProduct(one)
            let productImages = []
            one.imageList.map(value => {
                const image = "http://localhost:8080/down/" +value.uuid+ "_" + value.fileName
                console.log(image)
                setMainImage(image)

                productImages.push(image)
            })
            setImages(productImages)
        })
        /*console.log("끝")*/
        setTargetReviewAndQnaPno(targetPno)
    },[targetPno,flag])


   console.log({images})
    return (
        <div>
            <h1>상품 하나</h1>
            {/*<img src={mainImage}/>*/}
            <Grid container>
                <Grid item xs={6}>
                    <Slider images={images}></Slider> {/*this.probs.images*/}
                </Grid>
                <Grid item xs={6}>
                    <li>{product.pname}</li>
                    <li>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
                    <li>{product.pno}</li>
                    <li>{product.username}</li>
                </Grid>
            </Grid>
            <ProductOneReviewList targetReviewAndQnaPno={targetReviewAndQnaPno}></ProductOneReviewList>
            <ProductOneQnaList targetReviewAndQnaPno={targetReviewAndQnaPno}></ProductOneQnaList>
        </div>
    );
};


export default ProductRead;