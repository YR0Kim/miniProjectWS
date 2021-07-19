import React, {useEffect, useState} from 'react';
import todoService from "./todoService";
import TodoRegister from "./TodoRegister";
import TodoRead from "./TodoRead";

const initState = {
    dtoList:[],
    pageList:[],
    page:1,
    size:0,
    start:0,
    end:0,
    totalPage:0,
    prev:false,
    next:false
}


const TodoList = () => {

    const [data, setData] = useState(initState)
    const [loading, setLoading] = useState(false)
    const [flag,setFlag] = useState(false)
    const [targetTno,setTargetTno] = useState(null)


    useEffect(() => {
        setLoading(true)
        todoService.getList(data.page).then(resJson => {
            setData(resJson)
            setLoading(false)
        })
    },[data.page,flag])

    const movePage = (num) => {
        setFlag(!flag) //같은 페이지 번호를 눌러도 갱신이 되도록!
        setTargetTno(null)
        setData({...data, page:num})
    }

    const readTodo = (tno) => {
        setTargetTno(tno)
    }

    const list = data.dtoList.map(t => <li key={t.tno} onClick={() => {readTodo(t.tno)}}>{t.tno} - {t.title}</li> )

    return (
        <div>
            <button onClick={() => movePage(3) }>MOVE</button>
            {loading ? <h3>Loading....</h3> :
                <>
                    {list}
                    <PageList data={data} movePage ={movePage}></PageList>

                    <hr/>
                    {targetTno && <TodoRead targetTno = {targetTno} movePage ={movePage}></TodoRead> } {/*//targetTno 가 값이 있는 경우만 호출!*/}
                    <hr/>

                    <TodoRegister movePage = {movePage}></TodoRegister> {/*꼼수로 movePage 를 넣어줌*/}
                </>
            }
        </div>
    )
}


const PageList = ({data, movePage}) => {

    return (
        <>
            {data.prev && <button onClick={() => movePage(data.start - 1)}>PREV</button>}
            {data.pageList.map(p => <button  key={p} onClick={() => movePage(p)}>{p}</button>)}
            {data.next && <button onClick={() => movePage(data.end +1)}>NEXT</button>}
        </>
    )

}

export default TodoList;