import React, {useState} from 'react';

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
    payment: false
}

const CartPayment = () => {

    const [payment, setPayment] = useState(initState)

    return (
        <div>
            
        </div>
    );
};

export default CartPayment;