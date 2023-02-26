import { createContext, useState } from "react";



export const UserContext = createContext();
const UserCtx = ({children}) => {


    const [user, setUser] = useState({})


    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}
         >
            {children}
        </UserContext.Provider>
    )
}

export default UserCtx;
