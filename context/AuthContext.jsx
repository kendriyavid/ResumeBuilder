import { createContext, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider =({children}) =>{
    const [Auth,setAuth] = useState({});
    return(
        <AuthContext.Provider value={{Auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;