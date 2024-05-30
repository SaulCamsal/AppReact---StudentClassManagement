import { create } from "zustand";
import { getStudents } from "../services/student-service";


export const useStudentStore = create(() => ({
    student : getStudents()
}))