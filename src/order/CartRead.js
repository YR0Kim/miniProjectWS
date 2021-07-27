import React, {useState, useEffect} from 'react';
import orderService from "./orderService";
import Button from "@material-ui/core/Button";
import queryString from "query-string";

const initState = {
    ono: 0,
    pname: "",
    price: 0,
    mName: "",
    mZipcode: 0,
    mAddress1: "",
    mAddress2: "",
    mTel1: "",
    mTel2: "",
    mTel3: ""
}

const CartRead = ({targetOno, location, history}) => {

    const ono = "80"
    // const query = queryString.parse(location.search)

    const [cart, setCart] = useState(initState)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        // orderService.readDetail(targetOno).then( cart => {
        orderService.readDetail(ono).then( cart => {
            setCart(cart)
        })
    // }, [targetOno, flag])
    }, [ono, flag])

    const clickPayment = () => {
        alert("배송 정보 입력 페이지로 이동합니다.")
        history.push("./CartPayment.js")
    }

    const clickDelCart = async () => {
        // orderService.deleteOrder(query.ono).then(data => {
        orderService.deleteOrder(ono).then(data => {
            alert("선택한 장바구니를 삭제했습니다.")
            // history.push("/order/cartlist?username="+username)       //username 수정필
        })
    }

    return (
        <div>
            <div>
                <h3>주문 상세 정보</h3>
                <table>
                    <tr>
                        <td>주문 번호: </td>
                        <td>{cart.ono}</td>
                    </tr>
                    <tr>
                        <td>상품명: </td>
                        <td>{cart.pname}</td>
                    </tr>
                    <tr>
                        <td>가격: </td>
                        <td>{cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                    </tr>
                    <tr>
                        <td>주문자명: </td>
                        <td>{cart.mName}</td>
                    </tr>
                    <tr>
                        <td>주소: </td>
                        <td>{cart.mZipcode}</td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>{cart.mAddress1}</td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>{cart.mAddress2}</td>
                    </tr>
                    <tr>
                        <td>연락처: </td>
                        <td>{cart.mTel1}-{cart.mTel2}-{cart.mTel3}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <Button class="cartBtn" variant="outlined" onClick={clickPayment}>결제하기</Button>
                            <Button class="cartBtn" variant="outlined" onClick={clickDelCart}>삭제</Button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default CartRead;