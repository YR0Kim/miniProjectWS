import axios from "axios";

const baseURL = "http://localhost:8080/"

const headerObj = {
    headers : {'Content-Type': 'application/json'}
}


const productService = () => {

    const getQnaRead = async () => {
        const result = await axios.get(baseURL + "qnas/" + "1",headerObj)

        console.log(result)
        return result.data
    }

    const getSearchProductList = async (page) => {
        console.log("sssssssssssssssssssssssssssssssss",page)
        console.log(typeof page)
        const result = await  axios.get(baseURL + "products/list/pages/" + page ,headerObj )
        //http://localhost:8080/products/list/pages/1
        console.log("받은 후",result.data)
        return result.data
    }

    const readProduct = async (pno) => {
        console.log(pno)
        const result = await axios.get(baseURL + "products/" + pno, headerObj)
        console.log(result.data)
    }
/*
    const mainImageDownload = async (file)=>{
        console.log("파일 이름", file)
        const str = JSON.stringify(file)
        const result = await axios.get(baseURL + "down", str, headerObj)
    }*/


    return {getQnaRead,getSearchProductList,readProduct}
}

export default productService();