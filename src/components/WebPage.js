import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function WebPage(){
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}