import React, {useEffect, useState} from 'react';
import {Label} from "semantic-ui-react";
import orderService from "./orderService";
import queryString from "query-string";
import {NativeSelect, TextField} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const initState = {
    ono: '',
    pno: '',
    pname: '',
    price: 0,
    username: '',
    mname: '',
    mzipcode: '',
    maddress1: '',
    maddress2: '',
    mtel1: '010',
    mtel2: '',
    mtel3: '',
    oname: '',
    ozipcode: '',
    oaddress1: '',
    oaddress2: '',
    otel1: '010',
    otel2: '',
    otel3: '',
    orequest: '',
    del: false,
    payment: false
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
            // width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


// 상품 페이지에서 바로결제, 혹은 카트 리스트에서 개별 선택 후 결제버튼 클릭
const CartPayment = ({location, history}) => {

    // const query = queryString.parse(location.search)

    const ono = "43"

    const [payment, setPayment] = useState(initState)
    // const [mTel1, setMTel1] = useState('')
    // const [oTel1, setOTel1] = useState('')

    const classes = useStyles();

    useEffect(() => {
        // orderService.readDetail(query.ono).then(data => {
        orderService.readDetail(ono).then(data => {
            console.log(data)
            setPayment(data)
        })
    }, [])

    const onONameChange = (e) => {
        console.log(e.target.value)
        setPayment({...payment, oname : e.target.value })
    }

    const onOZipcodeChange = (e) => {
        console.log(e.target.value)
        setPayment({...payment, ozipcode: e.target.value })
    }

    const onOAddress1Change = (e) => {
        console.log(e.target.value)
        setPayment({...payment, oaddress1: e.target.value })
    }

    const onOAddress2Change = (e) => {
        console.log(e.target.value)
        setPayment({...payment, oaddress2: e.target.value })
    }

    const handleChange = (e) => {
        setPayment({...payment, otel1: e.target.value})
    }

    const onOTel2Change = (e) => {
        console.log(e.target.value)
        setPayment({...payment, otel2: e.target.value })
    }

    const onOTel3Change = (e) => {
        console.log(e.target.value)
        setPayment({...payment, otel3: e.target.value })
    }

    const onORequestChange = (e) => {
        console.log(e.target.value)
        setPayment({...payment, orequest: e.target.value })
    }

    const clickPayment = async () => {
        console.log(payment)
        // orderService.payOrder(query.ono, payment).then(data => {
        orderService.payOrder(ono, payment).then(data => {
            alert("결제가 완료되었습니다.")
            // history.push("/order/details?ono="+query.ono)
            history.push("/order/details?ono="+ono)
        })
    }


    return (
        <div>

            <form className={classes.root} noValidate autoComplete="off">
                <table>
                    <thead><h3>카트 정보 조회</h3></thead>
                    <tbody>
                        <tr>
                            <td colSpan="2">주문자 정보</td>
                        </tr>
                        <tr>
                            <td width="200"><Label>주문 번호</Label></td>
                            <td>{payment.ono}</td>
                        </tr>
                        <tr>
                            <td><Label>상품 번호</Label></td>
                            <td>{payment.pno}</td>
                        </tr>
                        <tr>
                            <td><Label>상품 이름</Label></td>
                            <td>{payment.pname}</td>
                        </tr>
                        <tr>
                            <td><Label>상품 가격</Label></td>
                            <td>{payment.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                        </tr>
                        <tr>
                            <td><Label>주문자 성함</Label></td>
                            <td>{payment.mname}</td>
                        </tr>
                        <tr>
                            <td><Label>주문자 주소</Label></td>
                            <td>{payment.mzipcode}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{payment.maddress1}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{payment.maddress2}</td>
                        </tr>
                        <tr>
                            <td><Label>주문자 연락처</Label></td>
                            <td>{payment.mtel1} - {payment.mtel2} - {payment.mtel3}</td>
                        </tr>
                        <hr/>
                        <tr>
                            <td colSpan="2">수령자 정보</td>
                        </tr>
                        <tr>
                            <td><Label>받으실 분</Label></td>
                            <td><TextField required id="oname" name="oname"
                                    variant="outlined" placeholder="이름 입력" onChange={onONameChange } /></td>
                        </tr>
                        <tr>
                            <td><Label>받으실 주소</Label></td>
                            <td>
                                <TextField required id="ozipcode" name="ozipcode"
                                           variant="outlined" onChange={onOZipcodeChange }/>
                                <Button class="memBtn" variant="outlined" >우편번호 검색</Button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <TextField required id="oaddress1" name="oaddress1"
                                           variant="outlined" placeholder="주소" onChange={onOAddress1Change }/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <TextField required id="oaddress2" name="oaddress2"
                                           variant="outlined" placeholder="상세 주소" onChange={onOAddress2Change }/>
                            </td>
                        </tr>
                        <tr>
                            <td><Label>연락처</Label></td>
                            <td>
                                <FormControl className={classes.formControl}>
                                    <NativeSelect id="select" variant="outlined" onChange={handleChange }>
                                        <option name="otel1" value={"010"} selected="selected">010</option>
                                        <option name="otel1" value={"011"}>011</option>
                                        <option name="otel1" value={"016"}>016</option>
                                        <option name="otel1" value={"018"}>018</option>
                                    </NativeSelect>
                                </FormControl> -
                                <TextField required id="otel2" name="otel2" variant="outlined" onChange={onOTel2Change }/> -
                                <TextField required id="otel3" name="otel3" variant="outlined" onChange={onOTel3Change }/>
                            </td>
                        </tr>
                        <tr>
                            <td><Label>배송 메모</Label></td>
                            <td>
                                <TextField required id="orequest" name="orequest"
                                           variant="outlined" placeholder="배송 메모" onChange={onORequestChange } />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <Button class="orderBtn" variant="outlined" onClick={clickPayment} >입력 완료</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default CartPayment;