import { IStudent } from "../components/students/IStudent"

export const url = "https://backend-subs-control.onrender.com/api/alumno"

export async function getStudents(){
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export async function postStudents(body:IStudent){
    const response = await fetch(url,{
        method: 'POST',
        body : JSON.stringify(body),//payload
        headers: {
            "Content-Type": "application/json"
          }
    })
    const data = response.json()

    return data
}




