

import { Box, Button, Container } from "@mui/material"
import { useLoginStore } from "../store/useLoginStore"
import { useNavigate } from "react-router-dom"

export function Admin(){ 
    //Values
    const {user} = useLoginStore()
    //functions
    const {logout} = useLoginStore()
    const navigate = useNavigate()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate("/students")
    }

    return(
        <>

            <h1>ADMIN VIEW!</h1>
            <p>Bienvenido: {user}</p>
            <Container component="main">
                <Box component="form" onSubmit={handleSubmit} 
                 sx={{ display:"flex", flexDirection: 'column'}}> 
                    <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }}>Students</Button>
                    <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }} disabled>Suscriptions</Button>
                    <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }} disabled>Classes</Button>
                    <Button 
                    type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} onClick={() => logout()}> 
                    Salir </Button>
                </Box>
            </Container>
            
        </>
    )
}