import { createContext, useState } from "react";

const Context = createContext()

function Provider ({children}){
    const [from, setFrom] = useState('Jadid adabiyoti ')
    
    const [search, setSearch] = useState("")
    const [arr, setArr] = useState("")
    return(
        <Context.Provider value={{from,setFrom,search,setSearch,arr,setArr}}>
            {children}
        </Context.Provider>
    )
}
export {Context,Provider}