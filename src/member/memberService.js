import axios from "axios";


const baseURL = "http://localhost:8080/member"

const headerObj = {
    headers : {'Content-Type': 'application/json'}
}

const memberService = () => {

    const readMember = async (username) => {
        console.log("username: ", username)
        const result = await axios.get( baseURL+"/info?username="+username, headerObj)
        console.log("result: ", result)
        return result.data
    }

    const registCustomer= async (member) => {
        const memberStr = JSON.stringify(member)
        console.log("memberStr: ",memberStr)
        const result = await axios.post(baseURL+"/customer", memberStr, headerObj)

        console.log("result data: ", result.data)

        return result.data
    }

    const registSeller = async (member) => {
        const memberStr = JSON.stringify(member)

        const result = await axios.post(baseURL+"/seller", memberStr, headerObj)

        return result.data
    }

    const delMember = async (username) => {
        const result = await axios.put(baseURL+"/delete?username="+username,headerObj)
        console.log(result.data)

        return result.data

    }

    const modMember = async (username, member) => {
        console.log("modMember로 넘어온 데이터:", username)

        const memStr = JSON.stringify(member)
        console.log("modMember에서 변형된 데이터:", memStr)

        const result = await axios.put(baseURL+"/modify?username="+username, memStr, headerObj)
        console.log(result)

        return result.data
    }

    return {readMember, registCustomer, registSeller, delMember, modMember}

}

export default memberService();