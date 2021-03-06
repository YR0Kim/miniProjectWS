import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import memberService from "./memberService";
import {NativeSelect} from "@material-ui/core";
import './member.css'

const initState = {
    username: '',
    password: '',
    nickname: '',
    mname: '',
    mzipcode: '',
    maddress1: '',
    maddress2: '',
    mtel1: '010',
    mtel2: '',
    mtel3: '',
    enabled: 0
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
            // width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const MemberModify = ({history}) => {

    // const query = queryString.parse(location.search)

    const username = 'asdf1234'

    const [modMemberDTO, setModMemberDTO] = useState(initState)
    const [loading, setLoading] = useState(false)
    //select박스를 이용하기 위한 변수 설정과 상태관리
    const classes = useStyles();

    useEffect(() => {
        setLoading(true)
        // memberService.readMember(query.username).then(data => {
        memberService.readMember(username).then(data => {
            console.log("data: ", data)
            setModMemberDTO(data)
            setLoading(false)
        })
    }, [])

    const onUsernameChange = (e) => {
        console.log(e.target.value)
        setModMemberDTO({...modMemberDTO, username: e.target.value})
    }

    const onPasswordChange = (e) => {
        console.log(e.target.value)
        setModMemberDTO({...modMemberDTO, password: e.target.value})
    }

    const onNicknameChange = (e) => {
        console.log(e.target.value)
        setModMemberDTO({...modMemberDTO, nickname: e.target.value})
    }

    const onMnameChange = (e) => {
        console.log(e.target.value)
        setModMemberDTO({...modMemberDTO, mname: e.target.value})
    }

    const onMzipcodeChange = (e) => {
        console.log(e.target.value)
        setModMemberDTO({...modMemberDTO, mzipcode: e.target.value})
    }

    const onMaddress1Change = (e) => {
        console.log(e.target.value)
        setModMemberDTO({...modMemberDTO, maddress1: e.target.value})
    }

    const onMaddress2Change = (e) => {
        console.log(e.target.value)
        setModMemberDTO({...modMemberDTO, maddress2: e.target.value})
    }

    const handleChange = (e) => {
        setModMemberDTO({...modMemberDTO, mtel1: e.target.value});
    }

    const onMtel2Change = (e) => {
        console.log(e.target.value)
        setModMemberDTO({...modMemberDTO, mtel2: e.target.value})
    }

    const onMtel3Change = (e) => {
        console.log(e.target.value)
        setModMemberDTO({...modMemberDTO, mtel3: e.target.value})
    }

    const clickModify = async () => {
        console.log(modMemberDTO)
        memberService.modMember(modMemberDTO.username, modMemberDTO).then(data => {
            alert("회원 정보가 수정되었습니다.")
            history.push("/")
        })
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <table width="700">
                <thead>
                <tr>
                    <th colSpan="2"><h3>회원 정보 수정</h3></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td width="200"><label>아이디</label></td>
                    <td>
                        <TextField id="userId" name="username"
                                   variant="outlined" disabled="disabled" required value={modMemberDTO.username} onChange={onUsernameChange }/>
                    </td>
                </tr>
                <tr>
                    <td><label>비밀번호</label></td>
                    <td>
                        <TextField id="password" name="password" type="password"
                                   variant="outlined" placeholder="비밀번호 입력" onChange={onPasswordChange }
                        />
                    </td>
                </tr>
                <tr>
                    <td><label>비밀번호 재확인</label></td>
                    <td>
                        <TextField id="repassword" name="repassword" type="password"
                                   variant="outlined" placeholder="비밀번호 재확인"
                        />
                    </td>
                </tr>
                <tr>
                    <td><label>닉네임</label></td>
                    <td>
                        <TextField id="nickname" name="nickname"
                                   variant="outlined" placeholder="닉네임 입력"
                                   required value={modMemberDTO.nickname} onChange={onNicknameChange } />
                    </td>
                </tr>
                <tr>
                    <td><label>이름</label></td>
                    <td>
                        <TextField id="userName" name="mname"
                                   variant="outlined" placeholder="이름 입력"
                                   required value={modMemberDTO.mname} onChange={onMnameChange } />
                    </td>
                </tr>
                <tr>
                    <td><label>주소</label></td>
                    <td>
                        <TextField id="zipcode" name="mzipcode"
                                   variant="outlined" disabled="disabled"
                                   required value={modMemberDTO.mzipcode} onChange={onMzipcodeChange }/>
                        <Button variant="outlined" >우편번호 검색</Button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <TextField required id="maddress1" name="maddress1"
                                   variant="outlined" required value={modMemberDTO.maddress1} disabled="disabled" onChange={onMaddress1Change }/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <TextField required id="maddress2" name="maddress2"
                                   variant="outlined" required value={modMemberDTO.maddress2} onChange={onMaddress2Change }/>
                    </td>
                </tr>
                <tr>
                    <td><label>연락처</label></td>
                    <td>
                        <FormControl className={classes.formControl}>
                            <NativeSelect id="select" onChange={handleChange}>
                                <option name="mtel1" value="010" selected="selected">010</option>
                                <option name="mtel1" value="011">011</option>
                                <option name="mtel1" value="016">016</option>
                                <option name="mtel1" value="018">018</option>
                            </NativeSelect>
                        </FormControl> -
                        <TextField required id="mtel2" name="mtel2" variant="outlined" required value={modMemberDTO.mtel2} onChange={onMtel2Change }/> -
                        <TextField required id="mtel3" name="mtel3" variant="outlined" required value={modMemberDTO.mtel3} onChange={onMtel3Change }/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <Button variant="outlined" color="primary" onClick={clickModify}>수정</Button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    );
};

export default MemberModify;