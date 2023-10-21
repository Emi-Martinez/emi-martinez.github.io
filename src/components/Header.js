import { Link,Outlet } from "react-router-dom"

export default function Header(){
    return(
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div>
                <h6>emi.martinez9696@gmail.com</h6> {/* Es un h7, hay que crearlo */}                
            </div>
            <Outlet />
        </div>
    )
}