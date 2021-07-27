import React, {useEffect, useState} from 'react';
import orderService from "./orderService";

const initState = {
    dtoList: [],
    listRequestDTO: [],
    pageMaker: {
        next: false,
        page: 1,
        pageList: [],
        prev: false,
        size: 5,
        totalCount: 0
    },
    page: 1,
    start: 0,
    end: 0
}

const CartList = ({location}) => {

    const username = "user76@aaa.com"

    const [cartList, setCartList] = useState(initState)
    const [loading, setLoading] = useState(false)
    let flag, setFlag;
    [flag, setFlag] = useState(false)
    const [targetOno, setTargetOno] = useState(null)

    useEffect(() => {
        setLoading(true)
        console.log("username: ", username, "page: "+cartList.page)

        //이 때 cart의 데이터로 분류된 것만 끌어옴
        orderService.getCartList(username, cartList.page).then(data => {
            console.log("주입할 데이터: ", data)
            setCartList(data)
            console.log("주입된 데이터", cartList)
            setLoading(false)
        })
    }, [flag])

    const movePage = (num) => {
        console.log("페이지 이동 시작")
        console.log("num: ", num)
        setCartList({...cartList, page: num})
        setTargetOno(null)
        console.log("페이지 이동 중 페이지 ", cartList.page)
        console.log("페이지 이동 종료")
        setFlag(!flag)
    }

    const readCart = (ono) => {
        setTargetOno(ono)
    }

    const list = cartList.dtoList
        .map(c => <li key={c.ono} cart={c} onClick={() => readCart(c.ono)}>{c.ono} {c.pname} {c.price}</li>)

    console.log("======================")
    console.log(list)

    return (
        <div>
            {loading ? <h3>Loading...</h3> :
                <>
                    <ul>
                        {list}
                    </ul>
                    <div>
                        <PageList cartList={cartList} movePage={movePage}></PageList>
                    </div>
                </>
            }
        </div>
    );
};

const PageList = ({cartList, movePage}) => {
    console.log("페이지 리스트 ", cartList)

    return (
        <>
            {cartList.pageMaker.prev && <button onClick={() => movePage(cartList.start-1)}>PREV</button>}
            {cartList.pageMaker.pageList.map(c => <button key={c} onClick={() => movePage(c)}>{c}</button>)}
            {cartList.pageMaker.next && <button onClick={() => movePage(cartList.end+1)}>PREV</button>}
        </>
    )

}

export default CartList;