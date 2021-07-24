import axios from "axios";


const baseURL = "http://localhost:8080/"

const headerObj = {
    headers : {'Content-Type': 'application/json'}
}

const qnaService = () => {

    const readQna = async (qno) => {
        /*console.log("qno: ", qno)*/

        const result = await axios.get(baseURL + "qnas/" + qno, headerObj)
        /*console.log("result: ", result.data)*/

        const data = await result.data

        return data
    }

    const readOne = async (targetPno,page) => {
        /*console.log("qna 리스트서비스: ",targetPno,page)
        console.log("typeof page: ", typeof page)
        console.log(baseURL + "qnas/list?page=" +page+"&pno="+targetPno)*/
        const result = await axios.get(baseURL + "qnas/list?page=" +page+"&pno="+targetPno, headerObj)
        /*console.log(result.data)
        console.log("result data: ",result.data)*/

        const data = await result.data

        return data
    }

    //구매자 qna
    const registQna = async (qna) =>{
        const qnaStr = JSON.stringify(qna)
        const result = await axios.post(baseURL + "qnas/register", qnaStr, headerObj)
        console.log(result.data)
        return result.data
    }

    return {readQna, readOne,registQna}

}

export default qnaService()