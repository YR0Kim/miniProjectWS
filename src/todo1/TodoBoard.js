import React, {useEffect, useState} from 'react';
import todoService from "./todoService";
import TodoList from "./TodoList";
import TodoRegister from "./TodoRegister";
import {useSelector} from "react-redux";
import SigninButton from "../signin/SigninButton";
import AsyncTime from "../async/AsyncTime";

const TodoBoard = () => {
    const countObj = useSelector(state => state.count)
    const [now, setNow] = useState('')
    const [flag, setFlag] = useState(false)

    console.log("TodoBoard..............")

   /* const displayTime = async () => {

        //console.log("RESULT", await todoService.getTime()) // 결과 나올때까지 기다림
        //const timeNow = await todoService.getTime() //이미 컴포넌트에 렌더링이 끝남
        setNow(timeNow)


    }
    displayTime()*/

    //★ useEffect 자체에 async 를 사용할 수 없음
    useEffect(() => {
        //호출했는데 진짜 결과가 나올 때 실행해달라는 then()
        todoService.getTime().then((res) => {
            setNow(res.data)

        })
    },[flag])

    const getTime = () => {
        setFlag(!flag)
    }




    // async : 나는 기다릴 수 있는 함수고
    // await : todoService.getTime() 결과 나올때까지 기다리겠다
    // 처음엔 비어있다가 결과 나오면 해당 값을 채운다 그래서 콘솔 찍으면 undefined 나온 것
    // 스레드 타임으로 1초 걸었으니 결과가 1초 후에 나옴
    // 그래서 처음엔 빈거 보여줬다가 뿌려 줄 것
    // 페이지 번호 상태를 물 건데 바뀌면 다시 렌더링하게...
    // 인데 1초 뒤에 목록도 옴 또 상태바껴서 렌더링 해야함 즉 무한 루프가 됨
    // 그래서 컨디션 할때만 동작하도록 함수를 설정하고 싶을때 useEffect 를 사용!!!!
    // useEffect 는 정확히 화면이 렌더링이 완료된 후에 수행하는 기능!
    // ★★★★★또한 어떤 값이 변경되었을 때만 실행되게 할 수도 있다!!!!!!
    // [props.source] -> 우리가 [] 빈배열 넣었던 곳에 머가 바뀌면 실행되는 지만 넣으면 됨

   // todoService.getTime()

    //promise - 콜백 헬에 빠지지 않도록 하는 용도

    //무한루프



    return (
        <div>
            <h1>Simple Todo {countObj.count} </h1>
            <AsyncTime></AsyncTime>
            <SigninButton></SigninButton>
            <button onClick={getTime}>CLICK</button>
            <TodoList></TodoList>
        </div>
    );
};

export default TodoBoard;