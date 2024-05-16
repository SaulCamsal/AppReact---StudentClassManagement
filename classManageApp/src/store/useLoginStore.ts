import { create } from "zustand";

interface ILoginStore{
    user: String | null;
    isLoggedIn: boolean;
    login: (user:string) => void;
    logout: () => void;
}

export const useLoginStore = create((set)=>({
    user:null,
    isLoggedIn:false,
    login: (user:string) => {set({user, isLoggedin:true})},
    logout: () => {
        window.localStorage.removeItem("user_token")
        set(
        {user: null, isLoggedIn:false})}
}))