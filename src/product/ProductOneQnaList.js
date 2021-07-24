import React, {useEffect, useState} from "react";
import qnaService from "./qnaService";
import ProductQnaRegister from "./ProductQnaRegister";

const initState = {
    "listRequestDTO":{},
    "dtoList":[],
    "pageMaker":{
        "next": false,
        "page": 1,
        "pageList": [],
        "prev": false,
        "size": 10,
        "totalCount": 0
    },
    "page":1,
    "start":0,
    "end":0
}

const ProductOneQnaList = ({targetReviewAndQnaPno}) => {

    const [qnaList, setQnaList] = useState(initState)
    const [loading, setLoading] = useState(false)
    const [flag, setFlag] = useState(false)

    useEffect( () => {
       /* console.log("조회할 상품번호 QnA",targetReviewAndQnaPno)*/
        setLoading(true)
        qnaService.readOne(targetReviewAndQnaPno,qnaList.page).then(one => {
            /*console.log("주입할 데이터", one)*/
            setQnaList(one)
            /*console.log("주입된 데이터", qnaList)*/
            setLoading(false)
        })
    }, [targetReviewAndQnaPno,flag])

    const movePage = (num) => {
        /*console.log("페이지 이동 시작")
        console.log("num: ", num)*/
        setQnaList({...qnaList, page: num})
        /*console.log("페이지 이동 중 페이지 ", qnaList.page)
        console.log("페이지 이동 종료")*/
        setFlag(!flag)
    }



    const qnas = qnaList.dtoList
        .map(qna => {
          /*  console.log("-==============qna!!!",qna)*/
            return(
            <ul key={qna.qnaDto.qno}>
                <li>{qna.qnaDto.username}</li>
                <li>{qna.qnaDto.regDate.substr(0,10)}</li>
                <li>{qna.qnaDto.qnacontent}</li>
            </ul>
            )
        })
   /* console.log("=================")*/

    return (
        <div>
            {loading ? <h3>Loading...</h3> :
                <>
                    <h1>QnA 리스트</h1>
                    <h2>QnA {qnaList.pageMaker.totalCount}건</h2>
                    {qnas}
                    <div>
                        <PageList qnaList={qnaList} movePage={movePage}></PageList>
                    </div>
                    <ProductQnaRegister targetReviewAndQnaPno={targetReviewAndQnaPno} movePage={movePage}></ProductQnaRegister>
                </>
            }
        </div>
    );
};

const PageList = ({qnaList, movePage}) => {
    /*console.log("페이지 리스트 ", qnaList)*/

    return (
        <>
            {qnaList.pageMaker.prev && <button onClick={() => movePage(qnaList.start-1)}>PREV</button>}
            {qnaList.pageMaker.pageList.map(q => <button key={q} onClick={() => movePage(q)}>{q}</button>)}
            {qnaList.pageMaker.next && <button onClick={() => movePage(qnaList.end+1)}>NEXT</button>}
        </>
    )

}

export default ProductOneQnaList;