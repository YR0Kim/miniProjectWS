import './App.css';
import React, {useState} from 'react';
import QnaRead from "./product/QnaRead";

import {Grid, Box, NativeSelect, TextField} from "@material-ui/core";
import ProductList from "./product/ProductList";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import SellerPage from "./product/SellerPage";
import Navbar from "./product/Navbar";
import NativeSelects from "./product/NativeSelects";
import TotalCss from "./product/TotalCss.css"
import {BiSearch} from "react-icons/all";
import MemberJoin from "./member/MemberJoin";



function App() {
    const [selectSearchType,setSelectSearchType] = useState("twc")

    const changeSearchType = (e) => {
        setSelectSearchType(e.target.value)
        console.log(e.target.value)
    }



    return (
        <div className="App">
            {/*<Grid container spacing={1} direction="row">*/}
            {/*    <Grid item xs={12}>*/}
            {/*        <Navbar/>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={12}>*/}
            {/*        <NativeSelect id="select" onChange={changeSearchType}>*/}
            {/*            <option value={"twc"} selected="selected">통합</option>*/}
            {/*            <option value={"t"}>상품명</option>*/}
            {/*            <option value={"w"}>판매자</option>*/}
            {/*            <option value={"c"}>내용</option>*/}
            {/*            <option value={"tc"}>상품명+내용</option>*/}
            {/*        </NativeSelect>*/}
            {/*        &nbsp;&nbsp;*/}
            {/*        <TextField id="outlined-basic" label="작품을 검색하세요" variant="outlined"/>*/}
            {/*        <BiSearch class="searchIcon" size="29" ></BiSearch>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={12}>*/}
            {/*        <Box bgcolor="skyblue" color="info.contrastText" p={2}>*/}
            {/*            <QnaRead></QnaRead>*/}
            {/*        </Box>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={2}>*/}

            {/*    </Grid>*/}
            {/*    <Grid item xs={8}>*/}
            {/*        <Box bgcolor="pink" paddingLeft={1} paddingTop={1} paddingBottom={3}>*/}
            {/*            <Route path="/seller" exact><Link to="/" >홈으로</Link></Route>*/}
            {/*            <div>*/}
            {/*                <Route path= "/" exact><Link to="/seller" >셀러로</Link></Route>*/}
            {/*            </div>*/}
            {/*            <Route path="/" exact component={ProductList} />*/}
            {/*            <Route exact path="/seller" component={SellerPage} />*/}
            {/*        </Box>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={2}>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={6}>*/}

            {/*    </Grid>*/}
            {/*</Grid>*/}

            <MemberJoin></MemberJoin>

        </div>
    );
}



export default App;
