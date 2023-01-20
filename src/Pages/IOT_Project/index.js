import { Outlet } from "react-router-dom"
import { HeaderPages } from "../../Component/Header/Header.pages"


export const IotProject=()=>{
    return <>
    <HeaderPages/>
    <Outlet/>
    </>
}

