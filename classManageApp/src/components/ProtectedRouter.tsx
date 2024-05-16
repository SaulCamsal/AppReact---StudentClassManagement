import { Navigate, Outlet } from "react-router-dom";
import { useLoginStore } from "../store/useLoginStore";


export function ProtectedRouter(){
    // validador de sesión
    const {isLoggedIn} = useLoginStore()

    if (isLoggedIn){
        return <Navigate to="/" />
    }

    return <Outlet />
}