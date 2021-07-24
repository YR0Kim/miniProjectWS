import React, {useEffect, useState} from 'react';
import reviewService from "./reviewService";
import ProductQnaRegister from "./ProductQnaRegister";

const initState = {
    "listRequestDTO":{},
    "dtoList":[],
    "pageMaker":{
        "next": false,
        "page": 1,
        "pageList": [],
        "prev": false,
        "size": 5,
        "totalCount": 0
    },
    "page":1,
    "start":0,
    "end":0
}

const ProductOneReviewList = ({targetReviewAndQnaPno}) => {

    const [reviewList,setReviewList] = useState(initState)

    const [loading, setLoading] = useState(false)

    const [flag,setFlag] = useState(false)


    useEffect(()=>{
        /*console.log("조회할 상품번호 리뷰",targetReviewAndQnaPno)
        console.log("중요 reviewList.page",reviewList.page)*/
        setLoading(true)
        reviewService.readOne(targetReviewAndQnaPno,reviewList.page).then(one => {
           /* console.log(one,"원이당")*/
            setReviewList({...one})
            setLoading(false)
        })

    },[targetReviewAndQnaPno,flag])

    const movePage = (num) => {
       /* console.log("무브페이지 시작")
        console.log("넘넘",num)*/
        setReviewList({...reviewList, page:num})
        /*console.log("무브페이지 끝")*/
        setFlag(!flag) //같은 페이지 번호를 눌러도 갱신이 되도록!
    }

    const reviews = reviewList.dtoList
        .map(review =>{
                return (
                        <ul key={review.reviewDTO.rno}>
                            <li>{review.reviewDTO.username}</li>
                            <li>{review.reviewDTO.regDate.substr(0,10)}</li>
                            {review.reviewDTO.imageList.map(i => {
                                    let image = "http://localhost:8080/down/"+i.uuid+ "_" + i.fileName
                                    console.log(image)
                                    return <li key={i.uuid}><img src={image}/></li>
                                }
                            )}
                            <li>{review.reviewDTO.rcontent}</li>
                        </ul>
                )
            }

        )


    return (
        <div>
            {
                loading ? <h3>Loading....</h3> :
                    <div>
                        <h1>상품 리뷰리스트</h1>
                        <h2>구매후기 {reviewList.pageMaker.totalCount}건</h2>
                        {reviews}
                        <div>
                            <RPageList reviewList={reviewList} movePage={movePage}></RPageList>
                        </div>
                    </div>
            }
        </div>
    );
};

const RPageList = ({reviewList,movePage}) => {
    /*console.log("리뷰/페이지리스트",reviewList)*/
    return (
        <>
            {reviewList.pageMaker.prev && <button onClick={() => movePage(reviewList.start-1)}>PREV</button>}
            {reviewList.pageMaker.pageList.map(p => <button  key={p} onClick={() => movePage(p)}>{p}</button>)}
            {reviewList.pageMaker.next && <button onClick={() => movePage(reviewList.end+1)}>NEXT</button>}
        </>
    )

};

export default ProductOneReviewList;