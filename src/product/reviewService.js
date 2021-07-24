import axios from "axios";

const baseURL = "http://localhost:8080/"

const headerObj = {
    headers : {'Content-Type': 'application/json'}
}

const reviewService = () => {

    const readOne = async (targetPno,page) => {
        /*console.log("리뷰서비스",targetPno,page)*/
        const result = await axios.get(baseURL + "reviews/list?pno=" +targetPno+"&page="+page, headerObj)
        /*console.log("받아온 결과",result.data)*/
        return result.data
    }

    return {readOne}
}

export default reviewService()