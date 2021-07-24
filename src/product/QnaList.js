import {useEffect, useState} from "react";
import qnaService from "./qnaService";

const initState = {
    dtoList: [],
    listRequestDTO: [],
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
    let flag, setFlag;
    [flag, setFlag] = useState(false);
    const [targetQno, setTargetQno] = useState(null)

    useEffect( () => {
        setLoading(true)
        qnaService.getSearchProductList(qnaSearchList.page).then( data => {
            console.log("주입할 데이터", data)
            setQnaSearchList(data)
            console.log("주입된 데이터", qnaSearchList)
        })
    }, [flag])

    const movePage = (num) => {
        console.log("페이지 이동 시작")
        console.log("num: ", num)
        setQnaSearchList({...qnaSearchList, page: num})
        setTargetQno(null)
        console.log("페이지 이동 중 페이지 ", qnaSearchList.page)
        console.log("페이지 이동 종료")
        setFlag(!flag)
    }

    const readQna = (qno) => {
        setTargetQno(qno)
    }

    const list = qnaSearchList.dtoList
        .map(q => <li key={q.qno} qna={q} onClick={() => readQna(q.qno)}> {q.qno} - {q.qnacontent} </li>)
    console.log("=================")
    console.log(list)

    return (
        <div>
            {loading ? <h3>Loading...</h3> :
                <>
                    <ul>
                        {list}
                    </ul>
                    <div>
                        <PageList qnaSearchList={qnaSearchList} movePage={movePage}></PageList>
                    </div>
                </>
            }
        </div>
    );
};

const PageList = ({qnaSearchList, movePage}) => {
    console.log("페이지 리스트 ", qnaSearchList)

    return (
        <>
            {qnaSearchList.pageMaker.prev && <button onClick={() => movePage(qnaSearchList.start-1)}>PREV</button>}
            {qnaSearchList.pageMaker.pageList.map(q => <button key={q} onClick={() => movePage(q)}>{q}</button>)}
            {qnaSearchList.pageMaker.next && <button onClick={() => movePage(qnaSearchList.end+1)}>NEXT</button>}
        </>
    )

}

export default QnaList;