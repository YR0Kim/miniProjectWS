import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Label} from "semantic-ui-react";
import {NativeSelect} from "@material-ui/core";
import orderService from "./orderService";

const initState = {
    ono: '',
    pno: '',
    pname: '',
    price: 0,
    oname: '',
    ozipcode: '',
    oaddress1: '',
    oaddress2: '',
    otel1: '010',
    otel2: '',
    otel3: '',
    orequest: '',
    del: false,
    payment: true
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


const OrderModify = ({location, history}) => {

    const ono = "43"
    // const query = queryString.parse(location.search)
    const [orderMod, setOrderMod] = useState(initState)

    const classes = useStyles();

    useEffect(() => {
        // orderService.readDetail(query.ono).then(data => {
        orderService.readDetail(ono).then(data => {
            console.log(data)
            setOrderMod(data)
        })
    }, [])

    const onONameChange = (e) => {
        console.log(e.target.value)
        setOrderMod({...orderMod, oname : e.target.value })
    }

    const onOZipcodeChange = (e) => {
        console.log(e.target.value)
        setOrderMod({...orderMod, ozipcode: e.target.value })
    }

    const onOAddress1Change = (e) => {
        console.log(e.target.value)
        setOrderMod({...orderMod, oaddress1: e.target.value })
    }

    const onOAddress2Change = (e) => {
        console.log(e.target.value)
        setOrderMod({...orderMod, oaddress2: e.target.value })
    }

    const onOTel1Change = (e) => {
        console.log(e.target.value)
        setOrderMod({...orderMod, otel1: e.target.value})
    }

    const onOTel2Change = (e) => {
        console.log(e.target.value)
        setOrderMod({...orderMod, otel2: e.target.value })
    }

    const onOTel3Change = (e) => {
        console.log(e.target.value)
        setOrderMod({...orderMod, otel3: e.target.value })
    }

    const onORequestChange = (e) => {
        console.log(e.target.value)
        setOrderMod({...orderMod, orequest: e.target.value })
    }

    const clickModifyOrder = () => {
        // orderService.modifyOrder(query.ono, payment).then(data => {
        orderService.modifyOrder(ono, orderMod).then(data => {
            alert("수정이 완료되었습니다.")
            history.push("/order/details?ono="+ono)
            // history.push("/order/details?ono="+query.ono)
        })
    }

    const clickCancelOrder = () => {
        orderService.cancelOrder(ono).then(data => {
            alert("주문이 취소되었습니다.")
            history.push("/order/details?ono="+ono)
        })
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <table>
                <thead><h3>주문 정보 조회</h3></thead>
                    <tbody>
                    <tr>
                        <td><Label>주문 번호</Label></td>
                        <td>{orderMod.ono}</td>
                    </tr>
                    <tr>
                        <td><Label>받으실 분</Label></td>
                        <td><TextField required id="oname" name="oname"
                                       variant="outlined" value={orderMod.oname} onChange={onONameChange } /></td>
                    </tr>
                    <tr>
                        <td><Label>받으실 주소</Label></td>
                        <td>
                            <TextField required id="ozipcode" name="ozipcode"
                                       variant="outlined" value={orderMod.ozipcode} onChange={onOZipcodeChange }/>
                            <Button class="memBtn" variant="outlined" >우편번호 검색</Button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <TextField required id="oaddress1" name="oaddress1"
                                       variant="outlined" value={orderMod.oaddress1} onChange={onOAddress1Change }/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <TextField required id="oaddress2" name="oaddress2"
                                       variant="outlined" value={orderMod.oaddress2} onChange={onOAddress2Change }/>
                        </td>
                    </tr>
                    <tr>
                        <td><Label>연락처</Label></td>
                        <td>
                            <FormControl className={classes.formControl}>
                                <NativeSelect id="select" variant="outlined" onChange={onOTel1Change }>
                                    <option name="otel1" value={"010"} selected="selected">010</option>
                                    <option name="otel1" value={"011"}>011</option>
                                    <option name="otel1" value={"016"}>016</option>
                                    <option name="otel1" value={"018"}>018</option>
                                </NativeSelect>
                            </FormControl> -
                            <TextField required id="otel2" name="otel2" variant="outlined" value={orderMod.otel2} onChange={onOTel2Change }/> -
                            <TextField required id="otel3" name="otel3" variant="outlined" value={orderMod.otel3} onChange={onOTel3Change }/>
                        </td>
                    </tr>
                    <tr>
                        <td><Label>배송 메모</Label></td>
                        <td>
                            <TextField required id="orequest" name="orequest"
                                       variant="outlined" placeholder="배송 메모" value={orderMod.orequest} onChange={onORequestChange } />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <Button class="orderBtn" variant="outlined" onClick={clickModifyOrder } >배송정보 수정</Button>
                            <Button class="orderBtn" variant="outlined" onClick={clickCancelOrder } >주문 취소</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default OrderModify;