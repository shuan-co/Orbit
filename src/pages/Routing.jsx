import React from "react";
import { Outlet } from "react-router-dom";
import Index from "./index/Index.jsx";


const Routing = () => {
    return (<>
            <Index /> 
            <Outlet />
            </>);
}

export default Routing;