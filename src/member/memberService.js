import axios from "axios";


const baseURL = "http://localhost:8080/"
const headerObj = {
    headers : {'Content-Type': 'application/json'}
}

const memberService = () => {

    const readMember = async (username) => {

        const result = await axios.get(baseURL+"member/user="+username, headerObj)
        const data = await result.data

        return data
    }

    const registMember = async (member) => {
        const memberStr = JSON.stringify(member)
        console.log(memberStr)
        const result = await axios.post(baseURL+"member/register", memberStr, headerObj)

        console.log(result.data)

        return result.data
    }

    return {readMember, registMember}
}