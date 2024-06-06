import { Button, CircularProgress, Input, Stack } from "@mui/joy";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postStudents } from "../../services/student-service";

export function AddStudent() {

    const [loading, setLoading] = useState<Boolean>(false)

    const navigate = useNavigate()

    const addStudent = (body: any) => {
        postStudents(body)
    }

    const handleAgregarDB = (e: any) => {

        e.preventDefault();

        setLoading(true)

        const formData = new FormData(e.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        formJson.uuid = crypto.randomUUID()
        addStudent(formJson)
        setLoading(false)

        navigate('/students')

    }

    return (
        <>
            <form onSubmit={handleAgregarDB}>
                <Stack spacing={1}>
                    <Input placeholder="Nombre" name="nombre" />
                    <Input placeholder="Apellido" name="apellido" />
                    <Link to={"/students"}>
                    </Link>
                        <Button type="submit">Guardar</Button>
                </Stack>
            </form>
            {loading &&
                <CircularProgress />
            }


        </>
    )
}