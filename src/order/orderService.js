import axios from "axios";

const baseURL = "http://localhost:8080/order"

const headerObj = {
    headers : {'Content-Type': 'application/json'}
}

const orderService = () => {

    // 주문 상세 정보 조회
    const readDetail = async (ono) => {
        console.log("ono: ", ono)

        const result = await axios.get(baseURL + "/details?ono=" + ono, headerObj)
        console.log("result: ", result.data)

        const data = await result.data

        return data
    }

    // 주문 리스트 조회
    const getOrderList = async (username, page) => {
        console.log("order 리스트 페이지: ", page)
        console.log("typeof page: ", typeof page)
        // console.log(baseURL+"/order/orderlist?user="+username) 이런 형식으로 가져와야함

        const result = await axios.get(baseURL+"/orderlist?username="+username+"&page="+page, headerObj)
        console.log(result.data)
        console.log("result data: ", result.data)

        const data = await result.data

        return data

    }

    const getCartList = async (username, page) => {
        console.log("cart 리스트 페이지: "+page)
        console.log("typeof page: "+page)

        const result = await axios.get(baseURL+"/cartlist?username="+username+"&page="+page, headerObj)
        console.log(result.data)
        console.log("result data: ", result.data)

        const data = await result.data

        return data
    }

    const payOrder = async (ono, order) => {
        console.log("받아온 order: "+order)
        const orderStr = JSON.stringify(order)
        console.log("orderStr: ", orderStr)

        const result = await axios.put(baseURL+"/cartlist/payment?ono="+ono, orderStr, headerObj)

        return result.data
    }

    const deleteCart = async (ono) => {
        const result = await axios.delete(baseURL+"/cartlist/delete?ono="+ono, headerObj)

        return result.data
    }

    const modifyOrder = async (ono, order) => {
        console.log("받아온 order: ",order)
        const orderStr = JSON.stringify(order)

        const result = await axios.put(baseURL+"/orderlist/modify?ono="+ono, orderStr, headerObj)

        return result.data

    }

    const cancelOrder = async (ono) => {
        const result = await axios.put(baseURL+"/orderlist/cance?ono="+ono, headerObj)

        return result.data
    }

    return {readDetail, getOrderList, getCartList, payOrder, deleteCart, modifyOrder, cancelOrder }
}

export default orderService()