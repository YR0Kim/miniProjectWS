import React, {useEffect, useState} from 'react';
import todoService from "./todoService";

const initState = {
    tno : '',
    title : '',
    content : '',
    regdate : '',
    moddate : ''
}

const TodoRead = ({targetTno ,movePage}) => {

    const[todo,setTodo] = useState(initState)

    useEffect(()=>{
        //console.log("useEffect...", targetTno)
        todoService.getOne(targetTno).then(result =>{
          console.log(result)
            setTodo({...result})
        })
    },[targetTno])

    const change = (e) => { //onchange 에러안나게 하는 용도정도
        todo[e.target.name] = e.target.value
        setTodo(todo)
    }

    const clickDel = async () => {
        const {tno,title,content} = todo; //todo 안에 있는 값들을 추출해서 변수에 뿌려줌!
        const param = {tno : tno, title : title, content : content} //삭제하는데 필요한 객체를 만듬
        console.log(param)
        const result = await todoService.removeOne(param); //꼭 awiat주고 하기 안그럼 그래도
        alert(result)
        movePage(1)
    }

    const clickMod = async () => {
        const result = await todoService.updateTodo([...todo])
        alert(result)
        movePage(1)
    }


    return (
        <div>
            <div>
                <h1>Todo Read</h1>
                <div>
                    <h3>{todo.tno}</h3>
                </div>
                <div>
                    <input type={'text'} name={'title'} value={todo.title} onChange={change}/>
                </div>
                <div>
                    <input type={'text'} name={'content'} value={todo.content} onChange={change}/>
                </div>
                <div>
                    <button onClick={() => {clickMod()}}>MOD</button>
                    <button onClick={() => {clickDel()}}>DEL</button>
                </div>
            </div>
        </div>
    );
};

export default TodoRead;