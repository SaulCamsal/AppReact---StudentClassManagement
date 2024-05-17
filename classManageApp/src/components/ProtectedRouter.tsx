import { Navigate, Outlet } from "react-router-dom";
import { useLoginStore } from "../store/useLoginStore";


export function ProtectedRouter(){
    // validador de sesión
    const {isLoggedIn} = useLoginStore()
    console.log(isLoggedIn)
    if (!isLoggedIn){
        return <Navigate to="/" />
    }

    return <Outlet />
}