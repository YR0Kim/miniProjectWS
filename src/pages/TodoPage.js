import React, {useEffect, useState} from 'react';
import {
    BrowserRouter,
    Route,
    useRouteMatch,
    useParams,
    useLocation,
    Link,
    Redirect,
    useHistory,
    Switch
} from "react-router-dom";
import axios from "axios";
import {deleteOne3} from "../components/todo3/todo3Service";
import {movePage, setCurrent} from "../components/todo3/todo3Slice";
import url from "query-string";
import queryString from "query-string";



const TodoPage = () => {

    let { path, url } = useRouteMatch();

    return (
        <div>
            <h1>Todo Page</h1>
            <Link to={`${url}/list?page=1`}>List 1 page</Link>



            <Link to={`${url}/register`}>Register</Link>

                <Route path={`${url}/register`} >

                    <TodoRegister></TodoRegister>

                </Route>

                <Route path={`${url}/list`} component = {TodoListPage}>
                </Route>

                <Route path={`${url}/read/:tno`}>

                  <TodoReadPage></TodoReadPage>

                </Route>

        </div>
    );
};


/////////////////////////////////////////////////////////////////////////////////////////////////////

const initState = {
    dtoList:[],
    page:1,
    size:10,
    start:1,
    end: 10,
    prev:false,
    next:false,
    pageList: []
}

const TodoListPage = () => {

    console.log("--------------- Todo List Page....")

    const {search} = useLocation()
    const values = queryString.parse(search)
    const page = values.page||1
    const history = useHistory()

    const [data, setData] = useState(initState)

    useEffect(() => {

        axios.get("http://localhost:8080/todo/pages?page=" + page)
            .then(res => {
                setData(res.data)
            })

    }, [page])

    const readTodo = (tno) => {

        history.push("/todo/read/"+tno)

    }

    const list = data.dtoList.map(t => <li key={t.tno} onClick={() => {readTodo(t.tno)}     }>{t.tno}---{t.title}</li>)

    return (
        <>
            <h1>TodoListPage....with params</h1>
            <ul>
                {list}
                <PageList  {...data}></PageList>
            </ul>
        </>
    )

}

const PageList = ({pageList, prev,next, start,first,end}) => {

    const history = useHistory()

    const movePage = (num) => {
        console.log('movePage..', num)
        const targetURL  ="/todo/list?page="+ num

        history.push(targetURL)

    }


    return (
        <>
            {prev ?  <button onClick={() => movePage(start - 1) }>PREV</button>: <></>}

            {pageList.map(p => <button key={p} onClick={() =>  movePage(p) }>{p}</button>)}

            {next ?  <button onClick={ () => movePage(end+1) }>NEXT</button>: <></>}
        </>
    )
}






////////////////////////////////////////////////////////////////////////////////////////////////////

const readState = {
    tno:'',
    title:'',
    content:'',
    regDate: '',
    modDate: ''
}

const TodoReadPage = () => {

    let { path, url } = useRouteMatch();

    let { tno } = useParams();

    const [todo, setTodo] = useState(readState)

    useEffect(()=> {

        axios.get("http://localhost:8080/todo/"+tno).then(res => {

            setTodo(res.data)
        })

    }, [tno])



    const change = (e) => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    const clickDelete = (e) => {

        deleteOne3(todo, (msg) => {


        })

    }

    return (
        <div>
            <div>
                <label>TNO {todo.tno}</label>
            </div>
            <div>
                <label>TITLE <input type={'text'} name={'title'} value={todo.title} onChange={(e) => change(e)}/></label>
            </div>
            <div>
                <label>CONTENT <input type={'text'} name={'content'} value={todo.content} onChange={(e) => change(e)}/></label>
            </div>
            <div>
                <label>REGDATE {todo.regDate}</label>
            </div>
            <div>
                <button onClick={() => {} } >MOD</button>
                <button onClick={(e) => clickDelete(e) }>DEL</button>
            </div>

        </div>
    );
}


const TodoRegister = () => {

    return checkUser(
        <h1>Register</h1>
    )
}

const stoarge = window.localStorage

const checkUser = (component) => {

    if(!localStorage.getItem("user")){

        return <h1>Login Plz...</h1>
    }


    console.log("check user.........")

    return component

}



export default TodoPage;