import React, {useState, useEffect} from 'react';
import orderService from "./orderService";

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

const CartRead = ({targetOno, movePage}) => {

    const [cart, setCart] = useState(initState)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        orderService.readDetail(targetOno).then( cart => {
            setCart(cart)
        })
    }, [targetOno, flag])

    return (
        <div>
            <div>
                <h3>주문 상세 정보</h3>
                <li>주문 번호: {cart.ono}</li>
                <li>상품명: {cart.pname}</li>
                <li>가격: {cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
                <li>주문하신 분: {cart.mName}</li>
                <li>우편번호: {cart.mZipcode}</li>
                <li>주소: {cart.mAddress1}</li>
                <li>      {cart.mAddress2}</li>
                <li>연락처: {cart.mTel1}-{cart.mTel2}-{cart.mTel3}</li>
            </div>
            <div>
                {/*여기에 결제하기 버튼 생성*/}
            </div>
        </div>
    );
};

export default CartRead;