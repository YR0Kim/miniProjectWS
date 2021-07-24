import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const initState = {
    ono: '',
    pno: '',
    pname: '',
    price: 0,
    username: '',
    mName: '',
    mZipcode: '',
    mAddress1: '',
    mAddress2: '',
    mTel1: '',
    mTel2: '',
    mTel3: '',
    oName: '',
    oZipcode: '',
    oAddress1: '',
    oAddress2: '',
    oTel1: '',
    oTel2: '',
    oTel3: '',
    oRequest: '',
    regDate: '',
    modDate: '',
    del: false,
    payment: true
}

const OrderModify = () => {         // 결제버튼 클릭 후 배송정보 입력

    const [orderMod, setOrderMod] = useState(initState)

    return (
        <div>
            <h3>order modify</h3>

        </div>
    );
};

export default OrderModify;