import { Logout } from "@mui/icons-material"
import { useLoginStore } from "../store/useLoginStore"

export function Admin(){ 
    //Values
    const {user} = useLoginStore()
    //functions
    const {logout} = useLoginStore()


    return(
        <>
            <h1>ADMIN VIEW!</h1>
            <p>Bienvenido: {user}</p>
            <button onClick={() => logout()}> Salir </button>
        </>
    )
}