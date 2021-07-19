import axios from "axios";

const baseURL = "http://192.168.1.35:8080/todo"

const headerObj = {
    headers : {'Content-Type': 'application/json'}
}

const todoService = () => {

    const getTime = async () => { // async 비동기 함수다 라는 것
        console.log("getTime......")
        const result = await axios.get(baseURL + "/now") //해당 url 을 호출
        //await : 결과가 나올때까지 기다리라는 명렁어. async 가 있어야 사용 가능
        //const result = await axios.get(baseURL + "/pages?page=1");
        console.log(result);
        //"getTime......"은 한 번, result 는 두 번이 찍힘
        // axios.get 에는 Preflight request 가 존재
        //뜻은 사전 요청
        //본격적인 교차 출처 HTTP 요청 전에 서버 측에서
        //그 요청의 메서드와 헤더에 대해 인식하고 있는지를 체크하는 것.
        //하지만 서버를 여러 번 호출하면 시스템이 뻗으니까 두 번 실행되지 않도록 해야함
        //지금 당장 우리는 제어할 수 없음. 서버측에서 필터 등으로 해줘야하기 때문.
        return result
    }

    const getList = async (page) => {
        const result = await axios.get(baseURL+"/pages?page="+page)
        const data = await result.data
        return data
    }

    const registTodo = async (todo) => {
        const todoStr = JSON.stringify(todo)

        const result = await axios.post(baseURL,todoStr,headerObj)

        const data = await result.data

        return data
    }

    const getOne = async (tno) => {
        const result = await axios.get(baseURL + "/" +tno)
        const data = await result.data
        return data
    }
    const removeOne = async (todo) => {

        const result = await axios.delete(baseURL + "/" + todo.tno,{data : todo, headers : headerObj} )
        const data = await result.data
        return data
    }

    const updateTodo = async (todo) => {
        const todoStr = JSON.stringify(todo)
        const result= await axios.put(baseURL + "/" + todo.tno, todoStr, headerObj)
        const data = await result.data
        return data
    }


    return {getTime, getList, registTodo,getOne,removeOne,updateTodo}
}

export default todoService()