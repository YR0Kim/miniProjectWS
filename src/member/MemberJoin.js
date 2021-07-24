import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const initState = {
    username: '',
    userPwd: '',
    nickname: '',
    mname: '',
    mzipcode: '',
    maddress1: '',
    maddress2: '',
    mtel1: '',
    mtel2: '',
    mtel3: '',
    brno: '',
    regDate: '',
    modDate: '',
    del: false
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

const MemberJoin = () => {

    const [memJoin, setMemJoin] = useState(initState)

    //select박스를 이용하기 위한 변수 설정과 상태관리
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const change = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        memJoin[e.target.name] = e.target.value

        setMemJoin({...memJoin})
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <h3>회원 가입</h3>
            </div>
            <div>
                <div>
                    <label>아이디</label>
                    <TextField required id="outlined-required" // defaultValue="Hello World"
                        variant="outlined" placeholder="아이디 입력" />
                    <Button variant="outlined">중복검사</Button>
                </div>
                <div>
                    <label>비밀번호</label>
                    <TextField id="outlined-password-input" // label="Password"
                        type="password"
                        // autoComplete="current-password"     //비밀번호 자동 완성
                        variant="outlined" placeholder="비밀번호 입력"
                    />
                </div>
                <div>
                    <label>비밀번호 재확인</label>
                    <TextField id="outlined-password-input" type="password"
                               variant="outlined" placeholder="비밀번호 재확인"
                    />
                </div>
                <div>
                    <label>닉네임</label>
                    <TextField required id="outlined-required"
                               variant="outlined" placeholder="닉네임 입력" />
                </div>
                <div>
                    <label>이름</label>
                    <TextField required id="outlined-required"
                               variant="outlined" placeholder="이름 입력" />
                </div>
                <div>
                    <label>주소</label>
                    <TextField required id="outlined-required"
                               variant="outlined" readOnly='true'/>
                    <Button variant="outlined">우편번호 검색</Button>
                </div>
                <div>
                    <TextField required id="outlined-required"
                               variant="outlined" placeholder="주소"/>
                </div>
                <div>
                    <TextField required id="outlined-required"
                               variant="outlined" placeholder="상세 주소"/>
                </div>
                <div>
                    <label>연락처</label>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            variant="outlined"
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            {/*<MenuItem value="">*/}
                            {/*    <em>010</em>*/}
                            {/*</MenuItem>*/}
                            <MenuItem value={"010"}>010</MenuItem>
                            <MenuItem value={"011"}>011</MenuItem>
                            <MenuItem value={"016"}>016</MenuItem>
                        </Select>
                    </FormControl> -
                    <TextField required id="outlined-required" variant="outlined" /> -
                    <TextField required id="outlined-required" variant="outlined" />
                </div>
                <div>
                    <label>사업자 등록번호</label>
                    <TextField required id="outlined-required"
                               variant="outlined" placeholder="사업자 등록번호" />
                </div>
            </div>
            <div>
                <Button variant="outlined">회원가입</Button>
            </div>
        </form>
    );
};

export default MemberJoin;