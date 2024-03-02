import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const userContext=createContext({})
export function UserContextProvider({children}){
    let [user,setUser]=useState(null)
    useEffect(()=>{
        if (!user) {
            axios.get("http://localhost:5000/profile")
            .then((res)=>setUser(res))
        }
    },[])

    return(
     <userContext.Provider value={{user,setUser}}>
        {children}
    </userContext.Provider>
    )
}