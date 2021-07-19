import React from 'react';
import {useLocation} from "react-router-dom";

const Main = () => {

    let location = useLocation()

    console.log(location)

    return (
        <div>
          <h1>Main</h1>
          <a href={'/todo/list?page=1'}>Todo</a>
        </div>
    );
};

export default Main;