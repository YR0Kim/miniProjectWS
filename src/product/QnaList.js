import {useEffect, useState} from "react";
import qnaService from "./qnaService";

const initState = {
    dtoList: [],
    pageList: [],
    pageMaker: {
        next: false,
        page: 1,
        pageList: [],
        prev: false,
        size: 10,
        totalCount: 0
    },
    page: 1,
    start: 0,
    end: 0
}

const QnaList = () => {

    const [qnaSearchList, setQnaSearchList] = useState(initState)
    const [loading, setLoading] = useState(false)
    const [flag, setFlag] = useState(false)

    useEffect( () => {
        setLoading(true)
        qnaService.getSearchProductList(qnaSearchList.page).then( data => {
            console.log("주입할 데이터", data)
            setQnaSearchList(data)
            console.log("주입된 데이터", qnaSearchList)
        })
    }, [flag])

    const list = qnaSearchList.dtoList
        .map(q => <li key={q.qno} ></li>)

}

export default QnaList;