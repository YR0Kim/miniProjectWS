import React, {useEffect, useState} from 'react';
import orderService from "./orderService";

const initState = {
    ono: 0,
    pname: "",
    price: 0,
    oName: "",
    oZipcode: 0,
    oAddress1: "",
    oAddress2: "",
    oTel1: "",
    oTel2: "",
    oTel3: "",
    oRequest: ""
}

const OrderRead = ({targetOno, movePage}) => {

    const [order, setOrder] = useState(initState)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        orderService.readDetail(targetOno).then( order => {
            setOrder(order)
        })
    }, [targetOno, flag])
    // setFlag를 사용하지 않음으로써 flag에 변하지 않은 값이 들어가도 같은 페이지를 호출할 때 반응하도록 구현


    return (
        <div>
            <div>
                <h3>주문 상세 정보</h3>
                <li>주문 번호: {order.ono}</li>
                <li>상품명: {order.pname}</li>
                <li>가격: {order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
                <li>받으실 분: {order.oName}</li>
                <li>우편번호: {order.oZipcode}</li>
                <li>주소: {order.oAddress1}</li>
                <li>      {order.oAddress2}</li>
                <li>연락처: {order.oTel1}-{order.oTel2}-{order.oTel3}</li>
                <li>배송요청사항: {order.oRequest}</li>
            </div>
            <div>
                {/*여기나 리스트 자체에 수정하기 버튼 생성*/}
            </div>
        </div>
    );
};

export default OrderRead;