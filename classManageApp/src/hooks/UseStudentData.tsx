import { useEffect, useState } from "react"
import { IStudent } from "../components/students/IStudent"
import { getStudents } from "../services/student-service"


export function UseStudentData() {
    const [students, setStudents] = useState<IStudent[]>([])
    const [filteredStudents, setFilteredStudents] = useState<IStudent[]>([])
    const [searchFilter, setSearchFilter] = useState<string>("")

    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        applyStudentFilter()
    }, [students])

    useEffect(() => {
        applyStudentFilter()
    }, [searchFilter])

    const loadData = async () => {
        const data = await getStudents()
        setStudents(data)
    }

    const applyStudentFilter = () => (
        setFilteredStudents(students.filter((student: IStudent) =>
            student.nombre.toLowerCase().includes(searchFilter) ||
            student.apellido.toLowerCase().includes(searchFilter)))
    )

    const putStudent = async (bodyData: any) => { 

    }

    const postStudent = async (bodyData: any) => { 
        
    }
    const deleteStudent = async (id: string) => { 
        
    }

    return {students, filteredStudents, putStudent, postStudent, deleteStudent, setSearchFilter}
}
