import React, {useState} from 'react';
import todoService from "../todo1/todoService";
import qnaService from "./qnaService";

const initState = {
    pno : '',
    qnacontent : ''
}

const ProductQnaRegister = ({targetReviewAndQnaPno,movePage}) => {
    const [qna,setQna] = useState(initState)

    const change = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        qna[e.target.name] = e.target.value
        qna["pno"] = targetReviewAndQnaPno

        setQna({...qna})
    }

    const clickRegister = async () => {
        const result = await qnaService.registQna({...qna})
        console.log(result)
        movePage(1)
    }

    return (
        <div>
            <h1>qnaRegister</h1>
            <div>
                <input type={'text'} name={'qnacontent'} value={qna.content} onChange={change}/>
            </div>
            <div>
                <button onClick={clickRegister}>등록</button>
            </div>
        </div>
    );
};

export default ProductQnaRegister;