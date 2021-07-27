import React, {useEffect, useState} from 'react';
import memberService from "./memberService";
import {Button} from "@material-ui/core"

const initState = {
    username: '',
    password: '',
    nickname: '',
    mname: '',
    mzipcode: '',
    maddress1: '',
    maddress2: '',
    mtel1: '',
    mtel2: '',
    mtel3: '',
    brno: '',
}

const MemberInfo = ({history}) => {

    //조회할 id 받아오기
    // const query = queryString.parse(location.search)

    const username = "asdf1234"

    const [memInfo, setMemInfo] = useState(initState)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        // memberService.readMember(query.username).then(data => {
        memberService.readMember(username).then(data => {
            console.log("입력할 data: ", data)
            setMemInfo(data)
            setLoading(false)
        })
    }, [])

    const modifyMember = () => {
        // history.push("/member/modify?user="+query.username)
    }

    const delMember = () => {
        memberService.delMember(memInfo.username).then(data => {
            alert("탈퇴 되었습니다.")

            //로그인 끊기 처리 필요?
            history.push("/")
        })

    }

    return (
        <div>
            {loading ? <h3>Loading...</h3> :
                <table>
                    <thead>
                        <h3>회원 정보 보기</h3>
                        <hr/>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="200"><label>아이디</label></td>
                            <td>{memInfo.username}</td>
                        </tr>
                        <tr>
                            <td><label>닉네임</label></td>
                            <td>{memInfo.nickname}</td>
                        </tr>
                        <tr>
                            <td><label>이름</label></td>
                            <td>{memInfo.mname}</td>
                        </tr>
                        <tr>
                            <td><label>주소</label></td>
                            <td>{memInfo.mzipcode}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{memInfo.maddress1}</td>
                        </tr><tr>
                            <td></td>
                            <td>{memInfo.maddress2}</td>
                        </tr>
                        <tr>
                            <td><label>연락처</label></td>
                            <td>{memInfo.mtel1} - {memInfo.mtel2} - {memInfo.mtel3}</td>
                        </tr>
                        <tr>
                            <td><label>사업자 등록번호</label></td>
                            <td>{memInfo.brno}</td>
                        </tr>
                        <tr>
                            <Button variant="contained" color="primary" onClick={modifyMember}>수정</Button>
                            {'  '}
                            <Button variant="contained" color="secondary" onClick={delMember}>탈퇴</Button>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    );
};

export default MemberInfo;