import { Box, Popper } from "@mui/material";
import Navbar2 from "../../components/navbar/Navbar2";
import { AspectRatio, Card, CardContent, IconButton, Typography, Button } from "@mui/joy";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getStudents } from "../../services/student-service";
import { useEffect, useState } from "react";
import { IStudent } from "../../components/students/IStudent";
import { AddStudent } from "../../components/students/AddStudent";


export function Students() {

    const [students, setStudents] = useState<IStudent[]>([])
    //const student = useStudentStore()

    //Load data form url inside getStudent function
    const loadData = async () => {
        const data = await getStudents()
        setStudents(data)
    }
    useEffect(() => {
        loadData()
    }, [])


    return (
        <>
            <Navbar2 ></Navbar2>
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
            </Box>

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
                {students?.map((student: IStudent) => (
                    <Card sx={{ Width: 320 }}>
                        <div >
                            <Typography level="title-lg">{student.nombre} - {student.apellido}</Typography>
                            <IconButton
                                aria-label="card of student's info"
                                variant="plain"
                                color="neutral"
                                size="sm"
                                sx={{ position: 'absolute', top: '0.875rem', right: '2.5rem' }}
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                aria-label="card of student's info"
                                variant="plain"
                                color="neutral"
                                size="sm"
                                sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                            >
                                <RemoveCircleOutlineIcon />
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