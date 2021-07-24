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

const OrderList = () => {


    const [orderList, setOrderList] = useState(initState)
    const [loading, setLoading] = useState(false)
    let flag, setFlag;
    [flag, setFlag] = useState(false)
    const [targetOno, setTargetOno] = useState(null)

    useEffect(() => {
        setLoading(true)

        //이 때 order의 데이터로 분류된 것만 끌어옴
        orderService.getOrderList(orderList.page).then(data => {
            console.log("주입할 데이터: ", data)
            setOrderList(data)
            console.log("주입된 데이터: ", orderList)
        })
    }, [flag])

    const movePage = (num) => {
        console.log("페이지 이동 시작")
        console.log("num: ", num)
        setOrderList({...orderList, page: num})
        setTargetOno(null)
        console.log("페이지 이동 중 페이지 ", orderList.page)
        console.log("페이지 이동 종료")
        setFlag(!flag)
    }

    const readOrder = (ono) => {
        setTargetOno(ono)
    }

    const list = orderList.dtoList
        .map(o => <li key={o.ono} order={o} onClick={() => readOrder(o.ono)}>{o.ono} {o.pname} {o.price}</li>)



    console.log("===================")
    console.log(list)

    return (
        <div>
            {loading ? <h3>Loading...</h3> :
                <>
                    <ul>
                        {list}
                    </ul>
                    <div>
                        <PageList orderList={orderList} movePage={movePage}></PageList>
                    </div>
                </>
            }
        </div>
    );
};

const PageList = ({orderList, movePage}) => {
    console.log("페이지 리스트 ", orderList)

    return (
        <>
            {orderList.pageMaker.prev && <button onClick={() => movePage(orderList.start-1)}>PREV</button>}
            {orderList.pageMaker.pageList.map(o => <button key={o} onClick={() => movePage(o)}>{o}</button>)}
            {orderList.pageMaker.next && <button onClick={() => movePage(orderList.end+1)}>PREV</button>}
        </>
    )

}

export default OrderList;