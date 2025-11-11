import { useContext, createContext, useState } from "react";

const LoginContext = createContext({
    user: {
        firstName: '',
        lastName: ''
    },
    setUser: () => {}
})

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({firstName: '', lastName: ''})

    return (
        <LoginContext.Provider value={{user, setUser}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => {
    return useContext(LoginContext)
}