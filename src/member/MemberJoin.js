import React, {useEffect, useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import memberService from "./memberService";
import DaumPost from "./DaumPost";
import {NativeSelect} from "@material-ui/core";
import './member.css'
import {Link} from "react-router-dom";

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

const MemberJoin = ({history}) => {

    const [memJoin, setMemJoin] = useState(initState)

    //select박스를 이용하기 위한 변수 설정과 상태관리
    const classes = useStyles();
    const [tel1, setTel1] = useState('');

    const handleChange = (e) => {
        setTel1(e.target.value);
    };

    const change = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        memJoin[e.target.name] = e.target.value
        setMemJoin({...memJoin})
    }

    const clickRegister = async () => {
        memberService.registCustomer({...memJoin}).then(data => {
            alert("회원가입이 완료되었습니다.")

            //등록 후 메인 페이지로 이동
            history.push("/")
        })
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <table width="700">
                <thead>
                <tr>
                    <th colSpan="2"><h3>회원 가입</h3></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td width="200"><label>아이디</label></td>
                    <td>
                        <TextField required id="userId" name="username" // defaultValue="Hello World"
                                   variant="outlined" placeholder="아이디 입력" onChange={change}/>
                        <Button class="memBtn" variant="outlined">중복검사</Button>
                    </td>
                </tr>
                <tr>
                    <td><label>비밀번호</label></td>
                    <td>
                        <TextField id="password" name="password" // label="Password"
                                   type="password"
                            // autoComplete="current-password"     //비밀번호 자동 완성 옵션
                                   variant="outlined" placeholder="비밀번호 입력" onChange={change}
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
                        <TextField required id="nickname" name="nickname"
                                   variant="outlined" placeholder="닉네임 입력" onChange={change} />
                    </td>
                </tr>
                <tr>
                    <td><label>이름</label></td>
                    <td>
                        <TextField required id="userName" name="mname"
                                   variant="outlined" placeholder="이름 입력" onChange={change} />
                    </td>
                </tr>
                <tr>
                    <td><label>주소</label></td>
                    <td>
                        <TextField required id="zipcode" name="mzipcode"
                                   variant="outlined" onChange={change}/>
                        <Button class="memBtn" variant="outlined" >우편번호 검색</Button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <TextField required id="maddress1" name="maddress1"
                                   variant="outlined" placeholder="주소" onChange={change}/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <TextField required id="maddress2" name="maddress2"
                                   variant="outlined" placeholder="상세 주소" onChange={change}/>
                    </td>
                </tr>
                <tr>
                    <td><label>연락처</label></td>
                    <td>
                        <FormControl className={classes.formControl}>
                            <NativeSelect id="select" variant="outlined" onChange={handleChange}>
                                <option name="mtel1" value={"010"} selected="selected">010</option>
                                <option name="mtel1" value={"011"}>011</option>
                                <option name="mtel1" value={"016"}>016</option>
                                <option name="mtel1" value={"018"}>018</option>
                            </NativeSelect>
                        </FormControl> -
                        <TextField required id="mtel2" name="mtel2" variant="outlined" onChange={change}/> -
                        <TextField required id="mtel3" name="mtel3" variant="outlined" onChange={change}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <Button class="memBtn" variant="outlined" color="primary" onClick={clickRegister}>회원가입</Button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    );
};

export default MemberJoin;