import axios from "axios";

const baseURL = "http://localhost:8080/"

const headerObj = {
    headers : {'Content-Type': 'application/json'}
}

const orderService = () => {

    // 주문 상세 정보 조회
    const readDetail = async (ono) => {
        console.log("ono: ", ono)

        const result = await axios.get(baseURL + "order/details?ono=" + ono, headerObj)
        console.log("result: ", result.data)

        const data = await result.data

        return data
    }

    // 주문 리스트 조회
    const getOrderList = async (page) => {
        console.log("order 리스트 페이지: ", page)
        console.log("typeof page: ", typeof page)
        // console.log(baseURL+"/order/orderlist?user="+username) 이런 형식으로 가져와야함

        const result = await axios.get(baseURL+"order/orderlist?page="+page, headerObj)
        console.log(result.data)
        console.log("result data: ", result.data)

        const data = await result.data

        return data

    }

    const getCartList = async (page) => {
        console.log("cart 리스트 페이지: "+page)
        console.log("typeof page: "+page)

        const result = await axios.get(baseURL+"order/orderlist?user="+page, headerObj)
        console.log(result.data)
        console.log("result data: ", result.data)

        const data = await result.data

        return data
    }

    return {readDetail, getOrderList, getCartList}
}

export default orderService()