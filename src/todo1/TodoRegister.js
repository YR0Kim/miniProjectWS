import React, {useState} from 'react';
import todoService from "./todoService";
const initState = {
    title: '',
    content: ''
}
const TodoRegister = ({movePage}) => {
    const [todo, setTodo] = useState(initState)

    const change = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        todo[e.target.name] = e.target.value
        // setTodo(todo)       객체 자체가 바뀌지 않으면 상태가 바뀌었다 받아들이지 못함
        setTodo({...todo})      //{}으로 하면 새 객체 생성
    }
    const resetTodo = () => {
        setTodo(initState)
    }

    const clickRegister = async () => { //async await 을 사용하면 진짜 동기화된 처리 가능
        const result = await todoService.registTodo({...todo}) //{...todo} 깊은 복사를 통해 객체를 새로 짜서 꼬일 일 없이 해줌
        console.log(result)
        movePage(1) //등록하고 나서 1페이지로 이동하면 자연스레 등록되어있는걸 볼 수 있음
    }

    return (
        <div>
            <div>
                <input type={'text'} name={'title'} value={todo.title} onChange={change}/>
            </div>
            <div>
                <input type={'text'} name={'content'} value={todo.content} onChange={change}/>
            </div>
            <div>
                <button onClick={clickRegister}>REGISTER</button>
                <button onClick={resetTodo}>RESET</button>
            </div>
        </div>
    );
};
export default TodoRegister;