import { Box, Input } from "@mui/material";
import Navbar2 from "../../components/navbar/Navbar2";
import { AspectRatio, Card, CardContent, IconButton, Typography, Button } from "@mui/joy";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { getStudents, url } from "../../services/student-service";
import { useEffect, useState } from "react";
import { IStudent } from "../../components/students/IStudent";
import SearchIcon from '@mui/icons-material/Search';
import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup'; //popup



export function Students() {

    const [students, setStudents] = useState<IStudent[]>([])
    const [filterStudents, setFilterStudents] = useState<IStudent[]>([])
    const [selectedStudent, setSelectedStudent] = useState<IStudent | null>(null)

    //Load data form url inside getStudent function
    const loadData = async () => {
        const data = await getStudents()
        setStudents(data)
    }
    useEffect(() => {
        loadData()
    }, [])
    //Filter
    useEffect(() =>{
        setFilterStudents(students)
    },[])

    //functions Delete & Put
    //Delete
    const handleDelete = (id: string) => {
        const textConfirmDel = "¿Estas seguro de querer eliminar este elemento?"
        if (confirm(textConfirmDel) === true) {
            fetch(`${url}/${id}`, {
                method: 'DELETE'
            }).then((response) => response.json())
                .then((data) => {
                    setStudents(students.filter((students) => students.id !== id));
                })
        }
    }
    //Put
    const handlePut = (student: IStudent) => {
        setSelectedStudent(student)
    }
    //Filter
    const handleSubmitFilter = (e:any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const search = formData.get("search") as string
        const filterStudents = students.filter((students:IStudent) =>(
            students.nombre.toLowerCase().includes(search) || students.apellido.toLowerCase().includes(search)
        ))
        setFilterStudents(filterStudents)

    }  


    return (
        <>
            {/* NAVBAR */}
            <Navbar2 ></Navbar2>
            {/* BUTTONS */}
            <Box
                sx={{
                    marginTop: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}
            >
                <h3>This is the Student page</h3>

                <Link to={"/addstudent"}>
                    <Button>
                        New Student
                    </Button>
                </Link>
                {/* FILTER*/}
                <Box onSubmit = {handleSubmitFilter}>
                    <IconButton>
                        <SearchIcon></SearchIcon>
                    </IconButton>
                    <Input type="text" name="buscar" sx={{border:'blue', borderBlock:'0.5rem'}}></Input>
                </Box>
            </Box>

            {/* CARDS */}
            <Box
                sx={{
                    marginTop: 1,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    border: 'deepskyblue',
                    borderBlockStyle: 'ridge',
                    gap: '5px'
                }}
            >
                {filterStudents.map((student: IStudent) => (
                    <Card sx={{ Width: 320 }}>
                        <div key={student.id} >
                            <Typography level="title-lg">{student.nombre} - {student.apellido}</Typography>
                            <IconButton
                                aria-label="card of student's info"
                                variant="plain"
                                color="neutral"
                                size="sm"
                                sx={{ position: 'absolute', top: '0.875rem', right: '2.5rem' }}
                            >
                                <EditIcon
                                    onClick={() => handlePut(student)}
                                />
                            </IconButton>
                            <IconButton
                                aria-label="card of student's info"
                                variant="plain"
                                color="neutral"
                                size="sm"
                                sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                            >
                                <RemoveCircleOutlineIcon
                                    onClick={() => handleDelete(student.id)}
                                />
                            </IconButton>
                        </div>
                        <AspectRatio minHeight="120px" maxHeight="200px">
                            <img
                                src="https://i.pinimg.com/236x/2f/97/f0/2f97f05b32547f54ef1bdf99cd207c90.jpg"
                                srcSet="https://i.pinimg.com/236x/2f/97/f0/2f97f05b32547f54ef1bdf99cd207c90.jpg x2"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                        <CardContent orientation="horizontal">
                            <div>
                                <Typography fontSize="lg" fontWeight="lg" sx={{ alignContent: "flex-start" }}>ID: {student.id} </Typography>
                                <Typography level="body-xs">{student.uuid}</Typography>
                            </div>
                            <Link to={'/studentview'}>
                                <Button
                                    variant="solid"
                                    size="md"
                                    color="primary"
                                    aria-label="Explore Bahamas Islands"
                                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                                >
                                    View
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </Box>

        </>
    )
}