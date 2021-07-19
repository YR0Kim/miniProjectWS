
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Map from "./Map";
import Movie from "./Movie";
import Main from "./Main";
import TodoPage from "./TodoPage";


export default () => {
    return(
        <Router>
            <Switch>
            <Route exact path="/map">
                <Map></Map>
            </Route>

            <Route path="/movies">
                <Movie/>
            </Route>

            <Route path="/todo">
                <TodoPage></TodoPage>
            </Route>

            <Route path="/" exact={true} component ={Main} >
            </Route>

            <Route component ={NotFound} >
            </Route>
            </Switch>
        </Router>
    )
}

const NotFound = () => {

    return (
        <>
            <h1>Not Found</h1>
        </>
    )
}